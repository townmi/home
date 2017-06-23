import { Router } from 'express'

import * as jwt from 'jsonwebtoken';

const sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

export default function rootRouter(app: Router) {
    app.get('/', function (req, res) {

        (async function () {
            await sleep(500);
            return res.send({
                "code": 200,
                "total": 2,
                "data": [
                    {
                        "topic": "最美不过夜生活",
                        "link": "",
                        "articleCount": 66,
                        "memberCount": 123,
                        "topicBannerPic": "http://production.ye-dian.com//uploads/image/20170614/20170614114659_57916.jpeg"
                    },
                    {
                        "topic": "最美不过夜生活2",
                        "link": "",
                        "articleCount": 662,
                        "memberCount": 1233,
                        "topicBannerPic": "http://production.ye-dian.com//uploads/image/20170614/20170614114659_57916.jpeg"
                    }
                ]
            })
        }());

    });

    app.get('/community', function (req, res) {
        (async function () {
            await sleep(500);
            return res.send({
                "code": 200,
                "total": 2,
                "data": [
                    {
                        profile: {
                            avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                            username: "一颗酸爽的白菜",
                            date: "2017.06.05  16:13"
                        },
                        message: {
                            description: "呃呃呃～算是吧～",
                            pictures: [
                                "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                                "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                                "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                                "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                                "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg"
                            ]
                        }
                    },
                    {
                        profile: {
                            avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                            username: "towne",
                            date: "2017-10-8"
                        },
                        message: {
                            description: "呃呃呃～算是吧～",
                            pictures: [
                                "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg"
                            ]
                        }
                    }
                ]
            })
        }());
    });

    app.get('/userlist', function (req, res) {
        (async function () {
            await sleep(500);
            return res.send({
                "code": 200,
                "total": 2,
                "data": [
                    {
                        avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                        username: "老王",
                        city: "上海市",
                        area: "晋安区"
                    },
                    {
                        avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                        username: "小胖",
                        city: "广州市",
                        area: "浦东新区"
                    },
                    {
                        avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                        username: "老王",
                        city: "上海市",
                        area: "晋安区"
                    },
                    {
                        avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                        username: "小胖",
                        city: "广州市",
                        area: "浦东新区"
                    },
                    {
                        avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                        username: "老王",
                        city: "上海市",
                        area: "晋安区"
                    }
                ]
            })
        }());
    });

    app.get('/message', function (req, res) {
        (async function () {
            await sleep(500);
            return res.send({
                "code": 200,
                "total": 2,
                "data": {
                    profile: {
                        avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                        username: "一颗酸爽的白菜",
                        date: "2017.06.05  16:13"
                    },
                    message: {
                        description: "呃呃呃～算是吧～",
                        pictures: [
                            "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                            "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                            "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                            "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                            "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                            "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                            "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg"
                        ]
                    }
                }
            })
        }());
    });

    app.get('/search', function (req, res) {
        (async function () {
            await sleep(500);
            return res.send({
                "code": 200,
                "total": 2,
                "data": [
                    {
                        id: "acbd",
                        topic: "#最美夜生活#",
                        address: "建国西路283号"
                    },
                    {
                        id: "acbdc",
                        topic: "#最美夜生活#",
                        address: "建国西路283号"
                    },
                    {
                        id: "acbde",
                        topic: "#最美夜生活#",
                        address: "建国西路283号"
                    }
                ]
            });
        }());
    });

    app.get('/token', function (req, res) {
        (async function () {
            await sleep(500);
            // console.log(req);
            const user = {
                score: 76.5,
                mobile: 13212345578,
                ktvId: "5931268dab73a6e07c1f0b49",
                uid: "1234561274622222"
            };
            const token = jwt.sign(user, 'NightPlusKmi');
            return res.send(token);
        }());
    });
} 