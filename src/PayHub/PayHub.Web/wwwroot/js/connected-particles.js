// https://nbremer.github.io/visualizingconnections/sections/1a.%20intro/slide-title/connected-particles.html
//Based on:
//https://observablehq.com/@mbostock/connected-particles-iii
//https://bl.ocks.org/veltman/995d3a677418100ac43877f3ed1cc728
//http://www.datasketch.es/february/code/nadieh

const width = document.body.clientWidth
const height = window.innerHeight

//Constants
const sf = Math.min(window.devicePixelRatio || 1, 2)
const pi2 = 2 * Math.PI

//Canvas for the lines
const canvas_lines = d3.select("body").append("canvas")
    .attr("width", sf * width)
    .attr("height", sf * height)
    .style("width", `${width}px`)
    .style("height", `${height}px`)
    // Jerin.2020.8.12
    .style("position", "absolute")
    .style("top", "0px")
    .style("left", "0px")
    .style("z-index", "-3");
const ctx_lines = canvas_lines.node().getContext("2d")
ctx_lines.scale(sf, sf)

//Canvas for the circles
const canvas_nodes = d3.select("body").append("canvas")
    .attr("width", sf * width)
    .attr("height", sf * height)
    .style("width", `${width}px`)
    .style("height", `${height}px`)
    .style("position", "absolute")
    .style("top", "0px")
    .style("left", "0px")
    .style("z-index", "-3");
const ctx_nodes = canvas_nodes.node().getContext("2d")
ctx_nodes.scale(sf, sf)

//Offscreen canvas for the trailing effect
const canvas_offscreen = document.createElement('canvas');
canvas_offscreen.style.zIndex = "-1";
canvas_offscreen.width = sf * width
canvas_offscreen.height = sf * height
const ctx_offscreen = canvas_offscreen.getContext("2d")
ctx_offscreen.globalAlpha = 0.95

//Settings of the line connections
const minDistance = 31;//20
const maxDistance = 123;//100
const minDistance2 = minDistance ** 2
const maxDistance2 = maxDistance ** 2

//Color interpolation
const color_interpolator_lines = d3.interpolateHcl(d3.hcl(10, 90, 60), d3.hcl(240, 80, 40))
const color_interpolator_nodes = d3.interpolateHcl(d3.hcl(280, 90, 60), d3.hcl(40, 90, 60))

//Create particles
const n = 456;//600
let particles = []
for (let i = 0; i < n; i++) particles.push(spawn())

/////////////////////////////////////////////////////
// MOVE THE PARTICLES
/////////////////////////////////////////////////////

d3.timer(function (elapsed) {

    ctx_lines.clearRect(0, 0, width, height)

    //Draw the lines
    for (let i = 0; i < n; ++i) {
        for (var j = i + 1; j < n; ++j) {
            let pi = particles[i]
            let pj = particles[j]
            let dx = pi.x - pj.x
            let dy = pi.y - pj.y
            let d2 = dx * dx + dy * dy

            if (d2 < maxDistance2) {
                ctx_lines.globalAlpha = d2 > minDistance2 ? (maxDistance2 - d2) / (maxDistance2 - minDistance2) : 1
                ctx_lines.beginPath()
                ctx_lines.moveTo(pi.x, pi.y)
                ctx_lines.lineTo(pj.x, pj.y)
                ctx_lines.strokeStyle = color_interpolator_lines(1 - (d2 > minDistance2 ? (maxDistance2 - d2) / (maxDistance2 - minDistance2) : 1))
                ctx_lines.stroke()
            }//if
        }//for j
    }//for i

    //Make a copy of the offscreen canvas, and copy it back on the nodes canvas (but a little lighter)
    ctx_offscreen.clearRect(0, 0, sf * width, sf * height)
    ctx_offscreen.drawImage(canvas_nodes.node(), 0, 0, sf * width, sf * height)
    ctx_nodes.clearRect(0, 0, width, height)
    ctx_nodes.drawImage(canvas_offscreen, 0, 0, width, height)

    //Draw the circles
    particles.forEach(p => {
        //Move the particle
        move(p)

        // p.x += p.vx
        if (p.x < -maxDistance) p.x += width + maxDistance * 2
        else if (p.x > width + maxDistance) p.x -= width + maxDistance * 2

        // p.y += p.vy
        if (p.y < -maxDistance) p.y += height + maxDistance * 2
        else if (p.y > height + maxDistance) p.y -= height + maxDistance * 2

        // p.vx += 0.15 * (Math.random() - 0.5) - 0.01 * p.vx
        // p.vy += 0.15 * (Math.random() - 0.5) - 0.01 * p.vy

        ctx_nodes.fillStyle = p.color
        ctx_nodes.beginPath()
        ctx_nodes.arc(p.x, p.y, 1, 0, pi2)
        ctx_nodes.fill()

    })//forEach
})//d3.timer

/////////////////////////////////////////////////////
// CREATE PARTICLES
/////////////////////////////////////////////////////

//Create the particles
function spawn() {
    let particle = {
        opacity: getRandomNumber(0.006, 0.025),
        color: color_interpolator_nodes(Math.random()),

        x: Math.random() * width,
        y: Math.random() * height,
        wander: getRandomNumber(0.75, 1.5),
        drag: getRandomNumber(0.85, 0.99),
        theta: getRandomNumber(-Math.PI, Math.PI),

        outside: false,
        draw: Math.random() < 0.1
    }

    //Set the speed
    particle.vx = Math.sin(particle.theta) * particle.wander
    particle.vy = Math.cos(particle.theta) * particle.wander
    particle.direction = particle.theta >= 0 ? 1 : -1;

    return (particle)
}//spawn

//Move the particle a little
function move(d) {
    d.x += d.vx
    d.y += d.vy

    // d.vx *= d.drag
    // d.vy *= d.drag

    if (Math.random() > 0.999) d.direction = -1 * d.direction

    d.theta += d.direction * getRandomNumber(0.001, 0.01)
    d.vx = Math.sin(d.theta) * d.wander
    d.vy = Math.cos(d.theta) * d.wander
}//move

//Get a random number between start and end
function getRandomNumber(start, end) { return ((Math.random() * (end - start)) + start) }	