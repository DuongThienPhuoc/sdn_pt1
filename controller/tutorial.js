const data = [
    {
        'id': 1,
        'title': 'Digital Transformation - Chuyển Đổi Số',
        'author': 'Lindsay Herbert',
        'images': [
            {'id': 1, 'url': '/1.png', 'caption': 'Digital Transformation'},
            {'id': 2, 'url': '/2.png', 'caption': 'Digital Transformation 1'},
            {'id': 3, 'url': '/3.png', 'caption': 'Digital Transformation 2'}
        ],
        'comments': [1, 2, 3],
        'category': 1
    },
    {
        'id': 2,
        'title': 'Big Data - Dữ Liệu Lớn',
        'author': 'Lars Rinnan',
        'images': [
            {'id': 4, 'url': '/4.png', 'caption': 'Big Data'},
            {'id': 5, 'url': '/5.png', 'caption': 'Big Data 1'},
            {'id': 6, 'url': '/6.png', 'caption': 'Big Data 2'}
        ],
        'comments': [4, 5, 6, 7],
        'category': 2
    },
    {
        'id': 3,
        'title': 'Cuộc Cách Mạng Blockchain',
        'author': 'Don & Alex Tapscott',
        'images': [
            {'id': 7, 'url': '/7.png', 'caption': 'Cuộc Cách Mạng Blockchain'},
            {'id': 8, 'url': '/8.png', 'caption': 'Cuộc Cách Mạng Blockchain 1'},
            {'id': 9, 'url': '/9.png', 'caption': 'Cuộc Cách Mạng Blockchain 2'}
        ],
        'comments': [8, 9],
        'category': 1
    }
]

function getAllTutorial(req, res) {
    res.status(200).json({
        message: 'Get all Tutorials',
        data: [
            data
        ],
        total: data.length
    })
}

function getTutorialById(req, res) {
    const title = req.params.title
    console.log(title)
    const response = data.find(x => x.title === title)
    if (!response) {
        res.status(404).json({
            message: `Title ${title} not found`
        })
    }
    res.status(200).json(response)
}

function createTutorial(req, res) {
    const newId = data.length + 1
    const newTutorial = Object.assign({id: newId}, req.body)
    data.push(newTutorial)
    res.status(201).json(newTutorial)
}

export {
    getAllTutorial,
    getTutorialById,
    createTutorial
}

