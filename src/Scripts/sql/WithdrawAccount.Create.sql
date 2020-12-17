USE [payhub]
GO

/****** Object:  Table [dbo].[WithdrawAccount]    Script Date: 2020-12-17 16:56:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[WithdrawAccount](
	[Id] [nchar](32) NOT NULL,
	[UserId] [nchar](32) NOT NULL,
	[CurrencyId] [nchar](32) NOT NULL,
	[Account] [nvarchar](256) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
	[QRCode] [varchar](max) NULL,
 CONSTRAINT [PK_WithdrawAccount] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


