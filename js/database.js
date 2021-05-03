let iframesList = window.localStorage.getItem('iframes')
if (!iframesList) iframesList = [
    {
        iframePoster: 'https://i.ytimg.com/vi/TxFR_7KsTDA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAsoWkjmjv2cMQpslJV96UZzNnVwQ',
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TxFR_7KsTDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        iframeTitle: 'This Is Why All Whales Are Afraid of Orca',
        iframeImgNumber: 14,
        iframeChannelTitle: 'WATOP'
    },
    {
        iframePoster: 'https://i.ytimg.com/vi/uClZ-Jfmgqw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAk4y1tIT-RSL6JIwrQ7CvtynRPoA',
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uClZ-Jfmgqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        iframeTitle: 'Hammer Restoration - $5 Hammer Reborn Into Something Amazing !!',
        iframeImgNumber: 8,
        iframeChannelTitle: 'Cool Again Restoration'
    },
    {
        iframePoster: 'https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApFIl4BE7rM2IGt1VjOWW5456--A',
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PkZNo7MFNFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        iframeTitle: 'Learn JavaScript - Full Course for Beginners',
        iframeImgNumber: 22,
        iframeChannelTitle: 'freeCodeCamp.org'
    },
    {
        iframePoster: 'https://i.ytimg.com/vi/JoDeRyyxMbQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0Q7A-URV4ELQFLuBBX29z1BHnUA',
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JoDeRyyxMbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        iframeTitle: 'Mazlumning aytganlari | @Abdukarim Mirzayev',
        iframeImgNumber: 19,
        iframeChannelTitle: 'YO`LDAGI ODAM'
    },
    {
        iframePoster: 'https://i.ytimg.com/vi/my32OLj-MF0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-Fqmebw0o7BR6P6YQiqyxaX8BdQ',
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/my32OLj-MF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        iframeTitle: `Diriliş Ertuğrul 59. Bölüm - Ertuğrul Noyan'ı Öldürüyor`,
        iframeImgNumber: 10,
        iframeChannelTitle: 'Diriliş Ertuğrul'
    },
    {
        iframePoster: 'https://i.ytimg.com/vi/Jm0MLlE4x0U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGXsmm6Jz2iKH31dF9a-LIVKYGZA',
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Jm0MLlE4x0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        iframeTitle: `The Fox and the Bird - CGI short film by Fred and Sam Guillaume`,
        iframeImgNumber: 18,
        iframeChannelTitle: 'MAGNETFILM'
    }
]
else iframesList = JSON.parse(iframesList)

