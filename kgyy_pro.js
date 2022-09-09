/*
软件名称: 酷狗音乐

青龙环境环境配置(@隔开)
https://gateway.kugou.com/mstc/musicsymbol/v1/user/info整个url
kgToken='https://gateway.kugou.com/mstc/musicsymbol/v1/user/info?...'
提现money=2表示提现2元
kgWithdraw='openid#nickname#money'

 */

var fs = require('fs'),
    path = require('path');


const _0x459d3c = "酷狗音乐";
const request = require('request')

const _0x89df4d = new Env(_0x459d3c)

const _0x179072 = 0;

const _0x131916 = require('os');

const _0x139e0a = _0x89df4d["isNode"]() ? require("./sendNotify") : '';

let _0x2c7bdf = 0;
let _0x3cf3c7 = '';
let _0x5157f5 = ["\n", '@'];

let _0x4eb054;

let _0x3e7360 = (_0x89df4d["isNode"]() ? process["env"]["kgToken"] : _0x89df4d["getdata"]("kgToken")) || '';

let _0x3706d7 = (_0x89df4d["isNode"]() ? process['env']["kgWithdraw"] : _0x89df4d["getdata"]("kgWithdraw")) || '';

let _0x3839aa = (_0x89df4d["isNode"]() ? process["env"]['kgWithdrawDate'] : _0x89df4d["getdata"]("kgWithdrawDate")) || '';

let _0x34dad6 = (_0x89df4d["isNode"]() ? process["env"]["cardSecret"] : _0x89df4d["getdata"]("cardSecret")) || '';

let token = (_0x89df4d["isNode"]() ? process["env"]["kg_token"] : _0x89df4d["getdata"]("kg_token")) || '';

let _0x2f2e68 = 0,
    _0x25891c = 0,
    _0x4f9ea0 = false,
    _0x3632d4 = 5000,
    _0x1fc89d = "kgyy_pro",
    _0x445128 = "1.1.0.100",
    _0x2b8539 = "https://solar.no0ne.tk",
    _0x5e806a = [],
    _0x3c9b0f = [];
let _0xbdc3d4 = '',
    _0x344e61 = '',
    _0x479611 = 0,
    _0x103729 = 15,
    _0x35d847 = 1005,
    _0x7da9c9 = 2919,
    _0x418cd1 = 11209,
    _0x5c32a6 = 'musicsymbol11209',
    _0x4a3e30 = "https://gateway.kugou.com";

if (!token) {
    console.log("\n未获取到授权，请填写环境变量kg_token");
    return;
}
console.log("\n\n========公告========= \n酷狗音乐: 本版本为私人订制 禁止外传 \n 【免责声明】 \n 1、此脚本内容分享为主，出于兴趣爱好，交流心得。 \n 2、禁止任何公众号/自媒体/论坛/群等类似渠道转发传播。 \n 3、此脚本只能用于学习、交流使用，不得用于任何商业用途。 \n 4、修改/破解此脚本导致软件平台的一切损失由修改/破解者承担。 \n 5、如不承认以及遵守以上条款，请立即删除并停止使用此脚本，感谢~ \n");

class _0x26ce4b {
    constructor(_0x11d06d) {
        this['index'] = ++_0x2f2e68;
        this["userId"] = _0x11d06d['match'](/userid=([\w\-]+)/)[1];
        this['dfid'] = _0x11d06d["match"](/dfid=([\w\-]+)/)[1];
        this["mid"] = _0x11d06d["match"](/mid=([\w\-]+)/)[1];
        this['uuid'] = _0x11d06d["match"](/uuid=([\w\-]+)/)[1];
        this["token"] = "appid=1005&clientver=11209&from=client&userid=" + this['userId'] + "&dfid=" + this["dfid"] + '&mid=' + this['mid'] + "&uuid=" + this["uuid"] + "&token=" + _0x11d06d["match"](/token=([\w\-]+)/)[1];
        this["nickname"] = '';
        this["total_coins"] = 0;
        this['balance_coins'] = 0;
        this["before_balance"] = 0;
        this["userAgent"] = "Android10-AndroidPhone-11209-130-0-ConcertsTips-wifi";
    }


    async ["userInfo"]() {
        const _0x390dad = {
            'vklkF': function (_0x59da44, _0x409dd1, _0x202623) {
                return _0x59da44(_0x409dd1, _0x202623);
            },
            'mSiGh': function (_0x252d15, _0xaf1a8, _0x1b7276) {
                return _0x252d15(_0xaf1a8, _0x1b7276);
            },
            "kedMg": function (_0x430c68, _0x14a584, _0x590b03, _0x52480f) {
                return _0x430c68(_0x14a584, _0x590b03, _0x52480f);
            },
            "yNfjc": "get",
            'uamhi': function (_0x3597af, _0x3fac78) {
                return _0x3597af === _0x3fac78;
            },
            'lDnmp': function (_0xfc210f, _0x2391d9) {
                return _0xfc210f !== _0x2391d9;
            },
            'kcDmg': 'DkDRD'
        };

        let _0xfbc33d = '',
            _0x212632 = "https://gateway.kugou.com/mstc/musicsymbol/v1/user/info?" + _0x497df2(this["token"] + "&spec=" + _0x103729, _0xfbc33d),
            _0x1eaf83 = _0x26e753(_0x212632, this, _0xfbc33d);

        await _0x1b7156("get", _0x1eaf83);

        if (!_0x4eb054) {
            return;
        }

        if (_0x4eb054["status"] === 1) {
            if (true) {
                this['nickname'] = _0x4eb054['data']["base"]["nickname"];
                this['total_coins'] = _0x4eb054["data"]['account']["total_coins"];
                this['balance_coins'] = _0x4eb054["data"]["account"]['balance_coins'];

                if (this["before_balance"] === 0) {
                    this["before_balance"] = this["balance_coins"];
                }
            } else {
                a = c(a, c(c(f(d, e, g), h), j));
                return c(b(a, i), d);
            }
        } else {
            console["log"]("账号[" + this['index'] + "]账户信息查询失败: " + _0x4eb054["error"]);
        }
    }

    async ['sign']() {
        const _0x3c2595 = {
            'jkmux': function (_0x44aa61, _0x41f0a6) {
                return _0x44aa61(_0x41f0a6);
            },
            "OOUoD": "path",
            'eSKpI': 'https://h5.kugou.com',
            "jWeNl": "https://h5.kugou.com/",
            "YwNnU": "com.kugou.android",
            'hdGrX': function (_0x4da123, _0x120b9f) {
                return _0x4da123(_0x120b9f);
            },
            "SGteY": function (_0x30ab75, _0x3998aa) {
                return _0x30ab75 + _0x3998aa;
            },
            "tYKNx": 'content-type',
            "SpJCB": "application/json; charset=utf-8",
            "UHHOp": "content-length",
            "bTrHM": function (_0x27c9cb, _0x5e2101, _0x5bdbf6) {
                return _0x27c9cb(_0x5e2101, _0x5bdbf6);
            },
            "tPmsU": function (_0xf92b31, _0x8a8ecf, _0x3b0ad5) {
                return _0xf92b31(_0x8a8ecf, _0x3b0ad5);
            },
            "EOiJU": function (_0x1044c5, _0x43b2d6, _0x4ae742, _0x46c494) {
                return _0x1044c5(_0x43b2d6, _0x4ae742, _0x46c494);
            },
            'gPSxW': function (_0x1f9b87, _0xe4c865, _0x2daeee) {
                return _0x1f9b87(_0xe4c865, _0x2daeee);
            },
            "TsPaX": function (_0x128503, _0x57215a) {
                return _0x128503 + _0x57215a;
            },
            "woHbC": function (_0x54fcbe, _0x573b1) {
                return _0x54fcbe + _0x573b1;
            },
            "GODay": function (_0x5a73b2, _0x2bdc56) {
                return _0x5a73b2 + _0x2bdc56;
            },
            "YATEz": function (_0x389f05, _0x2d51d7, _0x3288bb) {
                return _0x389f05(_0x2d51d7, _0x3288bb);
            },
            "AvmLW": function (_0x42c56d, _0x11682d) {
                return _0x42c56d === _0x11682d;
            },
            "JRQUJ": function (_0x554434, _0x2e6bd5) {
                return _0x554434 + _0x2e6bd5;
            },
            "STmUB": function (_0x45d18d, _0xa0bb27) {
                return _0x45d18d + _0xa0bb27;
            },
            "pExFy": function (_0x41f5e4, _0x3e2188, _0x1d65ab) {
                return _0x41f5e4(_0x3e2188, _0x1d65ab);
            },
            'IQboz': function (_0x2cd509, _0x5d6afd, _0x52965a) {
                return _0x2cd509(_0x5d6afd, _0x52965a);
            },
            "QbcIk": function (_0x33727c, _0x5329d5, _0x23eea9, _0x166250) {
                return _0x33727c(_0x5329d5, _0x23eea9, _0x166250);
            },
            "GkzPM": "get",
            'MhrQu': function (_0xd3d73a, _0x5a063f) {
                return _0xd3d73a !== _0x5a063f;
            },
            'ASzHF': "ffnym",
            "KjDBq": "YmGRJ",
            "lDaqS": function (_0x48cca0, _0xe33bc6) {
                return _0x48cca0 === _0xe33bc6;
            },
            'GEmsk': function (_0x3dcb23, _0x2088d8) {
                return _0x3dcb23 === _0x2088d8;
            },
            "fFOkk": function (_0x161bfc, _0x4e3abf) {
                return _0x161bfc === _0x4e3abf;
            },
            "yngXf": function (_0x2aa538, _0x459a9d, _0x125130) {
                return _0x2aa538(_0x459a9d, _0x125130);
            },
            "PajNZ": "post",
            "AuLhO": function (_0x196d87, _0x31c09d) {
                return _0x196d87 !== _0x31c09d;
            },
            "Qopqe": "kfsjz",
            "ABlQc": function (_0x809b03, _0x5ba46a) {
                return _0x809b03 === _0x5ba46a;
            },
            'iDWnd': function (_0xa658fa, _0x5c1309) {
                return _0xa658fa !== _0x5c1309;
            },
            "LaEKE": "oZdRV"
        };

        let _0x59f271 = new Date()['getFullYear']() + _0x329ef2(new Date()["getMonth"]() + 1, 2) + _0x329ef2(new Date()["getDate"](), 2),
            _0x48dc8f = '',
            _0x1fa32b = "https://gateway.kugou.com/mstc/musicsymbol/v1/task/sign_state?" + _0x497df2('' + this["token"], _0x48dc8f),
            _0x4dee0f = _0x26e753(_0x1fa32b, this, _0x48dc8f);

        await _0x1b7156("get", _0x4dee0f);

        if (!_0x4eb054) {
            return;
        }

        let _0x16eef6 = false,
            _0x53aadb = 0;

        if (_0x4eb054['status'] === 1) {
            if (false) {
                const [, _0x1ec3a3, _0x334b45] = /^@(.*?)\.(.*?)$/["exec"](t),
                    _0x37f73 = _0x1ec3a3 ? this["getval"](_0x1ec3a3) : '';

                if (_0x37f73) {
                    try {
                        const _0x3cc755 = JSON["parse"](_0x37f73);

                        e = _0x3cc755 ? this["lodash_get"](_0x3cc755, _0x334b45, '') : e;
                    } catch (_0x35dc91) {
                        e = '';
                    }
                }
            } else {
                let _0x361864 = _0x4eb054['data']["list"];

                for (let _0x51fd09 of _0x361864) {
                    if (true) {
                        if (_0x51fd09['code'] === _0x59f271) {
                            if (false) {
                                this['fs'] = this['fs'] ? this['fs'] : require('fs');
                                this["path"] = this['path'] ? this["path"] : require("path");

                                const _0x528674 = this['path']["resolve"](this['dataFile']),
                                    _0x5d0a02 = this['path']["resolve"](process["cwd"](), this["dataFile"]),
                                    _0xa2e181 = this['fs']['existsSync'](_0x528674),
                                    _0x42e977 = !_0xa2e181 && this['fs']['existsSync'](_0x5d0a02),
                                    _0x372f78 = JSON["stringify"](this["data"]);

                                _0xa2e181 ? this['fs']["writeFileSync"](_0x528674, _0x372f78) : _0x42e977 ? this['fs']["writeFileSync"](_0x5d0a02, _0x372f78) : this['fs']["writeFileSync"](_0x528674, _0x372f78);
                            } else {
                                if (_0x51fd09["state"] === 1) {
                                    _0x16eef6 = true;
                                }

                                _0x53aadb = _0x51fd09["award_coins"];
                            }
                        }
                    } else {
                        let _0x2e62f6 = _0x1fa32b['split']('//')[1]['split']('/')[0];

                        const _0x44b4f0 = {
                            "Host": _0x2e62f6,
                            "User-Agent": that["userAgent"],
                            "origin": "https://h5.kugou.com",
                            "referer": "https://h5.kugou.com/",
                            "x-requested-with": "com.kugou.android",
                            "kg-rc": '1',
                            'kg-fake': that["userId"],
                            "kg-thash": _0x209f06(7),
                            'kg-rf': '00' + _0x209f06(6)
                        };
                        const _0x532e8c = {
                            "url": _0x1fa32b,
                            "headers": _0x44b4f0,
                            "timeout": _0x3632d4
                        };

                        if (_0x48dc8f) {
                            _0x532e8c["body"] = _0x48dc8f;
                            _0x532e8c["headers"]["content-type"] = "application/json; charset=utf-8";
                            _0x532e8c["headers"]["content-length"] = _0x48dc8f["length"];
                        }

                        return _0x532e8c;
                    }
                }
            }
        } else {
            console['log']('账号[' + this['nickname'] + "]获取签到状态失败: " + _0x4eb054["error"]);
            return;
        }

        if (_0x53aadb === 0 || _0x16eef6 === true) {
            return;
        }

        await _0x89df4d['wait'](_0x88ca74(1000, 5000));
        const _0xbcac1f = {
            "code": _0x59f271
        };
        _0x48dc8f = JSON["stringify"](_0xbcac1f);
        _0x1fa32b = "https://gateway.kugou.com/mstc/musicsymbol/v1/task/signon?" + _0x497df2('' + this["token"], _0x48dc8f);
        _0x4dee0f = _0x26e753(_0x1fa32b, this, _0x48dc8f);
        await _0x1b7156("post", _0x4dee0f);

        if (!_0x4eb054) {
            return;
        }

        if (_0x4eb054["status"] === 1) {
            if (false) {
                len += 1;
            } else {
                console["log"]("账号[" + this['nickname'] + "]签到成功: 获得" + _0x53aadb + '金币');
                await _0x89df4d["wait"](_0x88ca74(15000, 20000));

                if (_0x4eb054['data']["double_code"]) {
                    if (true) {
                        const _0x3403f0 = {
                            'code': _0x59f271,
                            "double_code": _0x4eb054['data']["double_code"],
                            "double_award_type": _0x479611
                        };
                        _0x48dc8f = JSON["stringify"](_0x3403f0);
                        _0x1fa32b = "https://gateway.kugou.com/mstc/musicsymbol/v1/task/signon?" + _0x497df2(this["token"], _0x48dc8f);
                        _0x4dee0f = _0x26e753(_0x1fa32b, this, _0x48dc8f);
                        await _0x1b7156("post", _0x4dee0f);

                        if (!_0x4eb054) {
                            if (false) {
                                a = c(a, c(c(d(e, f, g), h), j));
                                return c(b(a, i), e);
                            } else {
                                return;
                            }
                        }

                        if (_0x4eb054["status"] === 1) {
                            console['log']("账号[" + this["nickname"] + "]签到翻倍成功: 获得" + _0x4eb054["data"]['awards']['coins'] + '金币');
                        } else {
                            console["log"]("账号[" + this["nickname"] + "]签到翻倍失败: " + _0x4eb054["error"]);
                        }
                    } else {
                        let _0x49a466 = _0x4eb054["data"]["list"];

                        if (_0x49a466[0]) {
                            let _0x359b9f = _0x49a466[0];

                            let _0x487d9b = _0x359b9f["addtime"]["slice"](0, 10);

                            let _0x25e24b = new Date()["getFullYear"]() + '-' + _0x329ef2(new Date()['getMonth']() + 1, 2) + '-' + _0x329ef2(new Date()["getDate"](), 2);

                            if (_0x487d9b === _0x25e24b) {
                                has_withdraw = true;
                            }
                        }
                    }
                }
            }
        } else {
            console["log"]("账号[" + this['nickname'] + "]签到失败: " + _0x4eb054['error']);
        }
    }

    async ["task"]() {
        const _0x2c89d5 = {
            "SyZeq": "crypto-js",
            "iwXTW": function (_0x2fd58a, _0x49e41b) {
                return _0x2fd58a != _0x49e41b;
            },
            'BapCH': function (_0x4c4484, _0x55ec9, _0x2d5c9f) {
                return _0x4c4484(_0x55ec9, _0x2d5c9f);
            },
            'IwfKX': function (_0x2c7ab2, _0x28ab9f) {
                return _0x2c7ab2 === _0x28ab9f;
            },
            "luWyD": function (_0x17c203, _0x4a1f40) {
                return _0x17c203 === _0x4a1f40;
            },
            "KeBZj": 'uGGuj',
            "VLdUb": function (_0x5830da, _0x35ff31) {
                return _0x5830da === _0x35ff31;
            },
            "meWKK": function (_0x149023, _0x7349b5) {
                return _0x149023 - _0x7349b5;
            },
            "xmoEn": function (_0x59129a, _0x469cdd) {
                return _0x59129a + _0x469cdd;
            },
            "KFPnA": function (_0x468952, _0x3e346e) {
                return _0x468952 === _0x3e346e;
            },
            "uKger": function (_0x146c87, _0x5ad785) {
                return _0x146c87 > _0x5ad785;
            },
            "vguaJ": "olDAo",
            "mJGZD": function (_0x1a4ae2, _0x1b184a) {
                return _0x1a4ae2 / _0x1b184a;
            },
            "oMkqp": function (_0x15f56e, _0x1c077e) {
                return _0x15f56e - _0x1c077e;
            },
            "Sicnt": function (_0x7c5a3f, _0x49081c) {
                return _0x7c5a3f >= _0x49081c;
            },
            "ggbST": function (_0x5a6388, _0xf85d28) {
                return _0x5a6388 * _0xf85d28;
            },
            "PGhXX": function (_0x37ebfe, _0x4b1afb, _0x20fe3f) {
                return _0x37ebfe(_0x4b1afb, _0x20fe3f);
            },
            "NJZoT": function (_0x5e939f, _0x360947, _0x5e830c, _0x25b9e1) {
                return _0x5e939f(_0x360947, _0x5e830c, _0x25b9e1);
            },
            "DUARZ": function (_0x26c1e0, _0x2d65f2, _0x126657) {
                return _0x26c1e0(_0x2d65f2, _0x126657);
            },
            "MPaoj": "FxEKa",
            'fpPDb': function (_0x137414, _0x4acb15, _0x3941bd, _0x372b0b) {
                return _0x137414(_0x4acb15, _0x3941bd, _0x372b0b);
            },
            "kwfBA": 'post',
            "kbpmI": function (_0xfe562e, _0x4b89c6) {
                return _0xfe562e === _0x4b89c6;
            },
            'gfXpZ': "BIlak"
        };
        const _0x5cf4b1 = {
            "val8": 2097152,
            "val7": 0,
            'val6': 3968,
            "val5": 0,
            "val4": 0,
            "val3": 0,
            "val2": 1,
            "val1": 64
        };
        const _0x28d1e1 = {
            "user_label": _0x5cf4b1
        };

        let _0x179d4e = JSON["stringify"](_0x28d1e1),
            _0x3bf71c = "https://gateway.kugou.com/mstc/musicsymbol/v1/system/infos?" + _0x497df2(this["token"] + "&spec=" + _0x103729 + '&channel=' + _0x5c32a6, _0x179d4e),
            _0x43e26e = _0x26e753(_0x3bf71c, this, _0x179d4e);

        await _0x1b7156('post', _0x43e26e);

        if (!_0x4eb054) {
            return;
        }

        if (_0x4eb054["status"] === 1) {
            let _0x491677 = _0x4eb054["data"]["tasks"];

            if (_0x491677) {
                for (let _0x324647 of _0x491677) {
                    if (true) {
                        let _0x305f68 = _0x324647["state"]["max_done_count"],
                            _0x2fbb3e = _0x324647["state"]['done_count'],
                            _0xe47f0c = _0x324647['profile']["name"],
                            _0x1156a9 = _0x324647["state"]["taskid"];

                        if (_0x305f68 - _0x2fbb3e === 0 || _0x1156a9 === 29) {
                            continue;
                        }

                        if (_0x1156a9 === 1) {
                            continue;
                        }

                        console["log"]("账号[" + this["nickname"] + "]第(" + (_0x2fbb3e + 1) + '/' + _0x305f68 + ")次执行" + _0xe47f0c + '任务');
                        await _0x89df4d["wait"](_0x88ca74(1000, 5000));

                        if (_0x1156a9 === 1108) {
                            await this["chiFan"]();
                            continue;
                        }

                        if (_0x1156a9 === 1107 && _0x2fbb3e > 0) {
                            if (true) {
                                await this["lottery"]();
                                continue;
                            } else {
                                console["log"]('账号[' + this["index"] + "]账户信息查询失败: " + _0x4eb054["error"]);
                            }
                        }

                        if (_0x1156a9 === 1105 && _0x2fbb3e > 0) {
                            let _0x4682ef = _0x324647["state"]['next_award_time'];

                            let _0x453568 = Math["floor"](new Date()["getTime"]() / 1000);

                            let _0x9c4ad = _0x4682ef - _0x453568;

                            if (_0x9c4ad >= 0) {
                                await _0x89df4d["wait"]((_0x9c4ad + 5) * 1000);
                            }
                        }

                        const _0x3c307c = {
                            "val8": 2097152,
                            "val7": 0,
                            "val6": 3968,
                            "val5": 0,
                            "val4": 0,
                            "val3": 0,
                            "val2": 1,
                            'val1': 64
                        };
                        const _0x45a5e7 = {
                            "taskid": _0x1156a9,
                            "user_label": _0x3c307c
                        };
                        _0x179d4e = JSON["stringify"](_0x45a5e7);
                        _0x3bf71c = "https://gateway.kugou.com/mstc/musicsymbol/v1/task/submit?" + _0x497df2(this["token"], _0x179d4e);
                        _0x43e26e = _0x26e753(_0x3bf71c, this, _0x179d4e);
                        await _0x1b7156("post", _0x43e26e);

                        if (!_0x4eb054) {
                            return;
                        }

                        if (_0x4eb054["status"] === 1) {
                            if (true) {
                                console['log']("账号[" + this["nickname"] + "]执行" + _0xe47f0c + "任务成功: 获得" + JSON["stringify"](_0x4eb054["data"]['awards']["coins"]) + '金币');
                                await _0x89df4d['wait'](_0x88ca74(15000, 20000));

                                if (_0x4eb054['data']["double_code"]) {
                                    const _0x49f297 = {
                                        'val8': 2097152,
                                        "val7": 0,
                                        'val6': 3968,
                                        'val5': 0,
                                        "val4": 0,
                                        "val3": 0,
                                        "val2": 1,
                                        "val1": 64
                                    };
                                    const _0x311dae = {
                                        'taskid': _0x1156a9,
                                        'double_code': _0x4eb054["data"]["double_code"],
                                        "double_award_type": _0x479611,
                                        "user_label": _0x49f297
                                    };
                                    _0x179d4e = JSON["stringify"](_0x311dae);
                                    _0x3bf71c = "https://gateway.kugou.com/mstc/musicsymbol/v1/task/submit?" + _0x497df2(this["token"], _0x179d4e);
                                    _0x43e26e = _0x26e753(_0x3bf71c, this, _0x179d4e);
                                    await _0x1b7156("post", _0x43e26e);

                                    if (!_0x4eb054) {
                                        return;
                                    }

                                    if (_0x4eb054["status"] === 1) {
                                        if (false) {
                                            const _0x2300cb = require("crypto-js");

                                            const _0x390e34 = require('fs');

                                            const _0x393190 = _0x390e34["readFileSync"]("raw_scripts_kgyy_pro.js");

                                            return _0x2300cb["MD5"](_0x393190["toString"]())['toString']();
                                        } else {
                                            console['log']("账号[" + this["nickname"] + ']' + _0xe47f0c + "任务翻倍成功: 获得" + JSON["stringify"](_0x4eb054["data"]["awards"]['coins']) + '金币');
                                        }
                                    }
                                }
                            } else {
                                const _0x58a060 = !this['isSurge']() && !this["isQuanX"]() && !this["isLoon"]();

                                _0x58a060 ? this["log"]('', '❗️' + this["name"] + ", 错误!", t["stack"]) : this["log"]('', '❗️' + this["name"] + ", 错误!", t);
                            }
                        } else {
                            console["log"]("账号[" + this["nickname"] + "]执行" + _0xe47f0c + "任务失败: " + _0x4eb054["error"]);
                        }
                    } else {
                        return "undefined" != typeof $task;
                    }
                }
            }
        }
    }

    async ["chiFan"]() {
        const _0x5c85c1 = {
            "lKoel": function (_0x3681dd) {
                return _0x3681dd();
            },
            "jyWaz": function (_0x547b98, _0x6beebc) {
                return _0x547b98 < _0x6beebc;
            },
            "CJYDw": function (_0x55d65f, _0x35847f) {
                return _0x55d65f * _0x35847f;
            },
            "oBGpD": function (_0x130924, _0x1cd549, _0x71e53f) {
                return _0x130924(_0x1cd549, _0x71e53f);
            },
            'jIPAb': function (_0x190bd0, _0x577160, _0x5d79c4, _0xe1ee2f) {
                return _0x190bd0(_0x577160, _0x5d79c4, _0xe1ee2f);
            },
            'DmxwQ': function (_0x517c6, _0x4000e1) {
                return _0x517c6 + _0x4000e1;
            },
            "PfXxR": function (_0x3d5e22, _0xc1ffed) {
                return _0x3d5e22 !== _0xc1ffed;
            },
            "CPuYB": "maHUU",
            "byWXp": function (_0x11b00f, _0x36edb7) {
                return _0x11b00f >= _0x36edb7;
            },
            "TKRVi": function (_0x910b6, _0x60d749) {
                return _0x910b6 !== _0x60d749;
            },
            'JPDik': 'qgTaT',
            "GmMGB": "yuUuL",
            "OkoSZ": function (_0x2234f9, _0x1b33f7) {
                return _0x2234f9 === _0x1b33f7;
            },
            "UcTNe": "UDbLf",
            "RfTPH": "vakYm",
            "xthFw": function (_0x1262c6, _0x37ed9e) {
                return _0x1262c6 === _0x37ed9e;
            },
            'CYqlM': function (_0x161433, _0x595bb1, _0xde3c2a, _0x459253) {
                return _0x161433(_0x595bb1, _0xde3c2a, _0x459253);
            },
            "HujDT": "post",
            "sbeOw": function (_0x3b84dc, _0x2de903) {
                return _0x3b84dc === _0x2de903;
            },
            "AXuHv": "zpRiU",
            'KGtce': 'BBAkG'
        };

        let _0x3e57b8 = '',
            _0x24e596 = "https://gateway.kugou.com/mstc/musicsymbol/v1/task/info?" + _0x497df2('taskid=1108&' + this["token"], _0x3e57b8),
            _0x49109c = _0x26e753(_0x24e596, this, _0x3e57b8);

        _0x49109c["headers"]["user-agent"] = "Mozilla/5.0 (Linux; Android 10; HUAWEI P" + (this["index"] % 4 + 2) + "0 Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 KugouBrowser/6.2 TBS/046011 Mobile Safari/537.36 GDTTangramMobSDK/8.450.2712 GDTMobSDK/8.450.2712";
        await _0x1b7156("get", _0x49109c);

        if (!_0x4eb054) {
            if (false) {
                if (fn) {
                    const _0x37bc29 = fn['apply'](context, arguments);

                    fn = null;
                    return _0x37bc29;
                }
            } else {
                return;
            }
        }

        let _0xfbf5e = '',
            _0x326ac2 = 0,
            _0x5bee00 = false,
            _0x2f44fd = '';

        if (_0x4eb054["status"] === 1) {
            let _0x5de5e3 = _0x4eb054["data"]["state"]["meals"];

            let _0xb77738 = new Date()["getHours"]();

            for (let _0x48143c of _0x5de5e3) {
                if (_0xb77738 >= _0x48143c["start_hour"] && _0xb77738 < _0x48143c['end_hour']) {
                    if (true) {
                        _0xfbf5e = _0x48143c["name"];
                        _0x326ac2 = _0x48143c["coins"];
                        _0x2f44fd = _0x48143c['id'];

                        if (_0x48143c["state"] === 0) {
                            _0x5bee00 = true;
                        }
                    } else {
                        len += 2;
                    }
                }
            }
        } else {
            if (false) {
                s = JSON['parse'](this['getdata'](t));
            } else {
                console["log"]("账号[" + this["nickname"] + "]获取吃饭补贴任务失败: " + _0x4eb054["error"]);
            }
        }

        if (_0x5bee00 === true) {
            const _0xc697a1 = {
                "val8": 2097152,
                "val7": 0,
                'val6': 3968,
                "val5": 0,
                "val4": 0,
                'val3': 0,
                "val2": 1,
                "val1": 64
            };
            const _0x2075aa = {
                "taskid": 1108,
                "meal_id": _0x2f44fd,
                'user_label': _0xc697a1
            };
            _0x3e57b8 = JSON["stringify"](_0x2075aa);
            _0x24e596 = "https://gateway.kugou.com/mstc/musicsymbol/v1/task/submit?" + _0x497df2(this["token"], _0x3e57b8);
            _0x49109c = _0x26e753(_0x24e596, this, _0x3e57b8);
            await _0x1b7156("post", _0x49109c);

            if (!_0x4eb054) {
                return;
            }

            if (_0x4eb054["status"] === 1) {
                if (true) {
                    console['log']('账号[' + this["nickname"] + "]执行" + _0xfbf5e + "任务成功: 获得" + _0x326ac2 + '金币');

                    if (_0x4eb054["data"]['double_code']) {
                        const _0x4a43a8 = {
                            "val8": 2097152,
                            "val7": 0,
                            'val6': 3968,
                            "val5": 0,
                            "val4": 0,
                            "val3": 0,
                            "val2": 1,
                            "val1": 64
                        };
                        const _0x517076 = {
                            "taskid": 1108,
                            "meal_id": _0x2f44fd,
                            "double_code": _0x4eb054["data"]["double_code"],
                            'double_award_type': _0x479611,
                            'user_label': _0x4a43a8
                        };
                        _0x3e57b8 = JSON["stringify"](_0x517076);
                        _0x24e596 = "https://gateway.kugou.com/mstc/musicsymbol/v1/task/submit?" + _0x497df2(this['token'], _0x3e57b8);
                        _0x49109c = _0x26e753(_0x24e596, this, _0x3e57b8);
                        await _0x1b7156("post", _0x49109c);

                        if (!_0x4eb054) {
                            return;
                        }

                        if (_0x4eb054["status"] === 1) {
                            if (false) {
                                resolve();
                            } else {
                                console["log"]("账号[" + this["nickname"] + ']' + _0xfbf5e + "任务翻倍成功: 获得" + JSON["stringify"](_0x4eb054["data"]["awards"]["coins"]) + '金币');
                            }
                        }
                    }
                } else {
                    e = e || 32;
                    let _0x46a8e3 = "abcdef0123456789",
                        _0x2303b0 = _0x46a8e3["length"],
                        _0x1d03a9 = '';

                    for (i = 0; i < e; i++) {
                        _0x1d03a9 += _0x46a8e3["charAt"](Math["floor"](Math["random"]() * _0x2303b0));
                    }

                    return _0x1d03a9;
                }
            } else {
                console["log"]("账号[" + this['nickname'] + "]获取吃饭补贴任务失败: " + _0x4eb054["error"]);
            }
        } else {
            console['log']("账号[" + this["nickname"] + ']' + _0xfbf5e + "任务奖励已领取或未到时间");
        }
    }

    async ['lottery']() {
        const _0x2af67b = {
            "oaACh": function (_0x338700) {
                return _0x338700();
            },
            'gYhcJ': function (_0x21a82b, _0x3b29ce) {
                return _0x21a82b - _0x3b29ce;
            },
            "SAumP": function (_0x539f59, _0x5f193a, _0x1f11b3, _0x3f6bcf) {
                return _0x539f59(_0x5f193a, _0x1f11b3, _0x3f6bcf);
            },
            "Hqdjn": function (_0x33c4db, _0x102153, _0x5911ff) {
                return _0x33c4db(_0x102153, _0x5911ff);
            },
            "hKnOH": 'get',
            "szSwC": function (_0x4ed7fc, _0x14d108, _0x550cab, _0x4968a5) {
                return _0x4ed7fc(_0x14d108, _0x550cab, _0x4968a5);
            },
            'FHoNx': "post",
            'wERoN': function (_0x5d9f7c, _0x59074e) {
                return _0x5d9f7c === _0x59074e;
            },
            'YpfrB': function (_0x2edc51, _0x3efd44) {
                return _0x2edc51 !== _0x3efd44;
            },
            "WEGJV": "hbRMe",
            "auyNl": function (_0x3424d8, _0x222937, _0x545bfc) {
                return _0x3424d8(_0x222937, _0x545bfc);
            },
            "NrShs": function (_0x1213fc, _0x13cac9, _0x29001d, _0x1dd27f) {
                return _0x1213fc(_0x13cac9, _0x29001d, _0x1dd27f);
            },
            "fbLLT": function (_0x4c0aae, _0x3b8e65, _0x50b743) {
                return _0x4c0aae(_0x3b8e65, _0x50b743);
            },
            "Hfafs": function (_0x255aae, _0x20fda5) {
                return _0x255aae === _0x20fda5;
            },
            "IKBca": "ZsotJ",
            "AOSCR": "HMTGI"
        };

        let _0x3ead73 = '',
            _0x1d5e83 = "http://sdk.e.qq.com/link_event_get?reportData={%22ts%22:" + (new Date()["getTime"]() - 35000) + ",%22pkg%22:%22%22,%22ct%22:4,%22os%22:2,%22sdk_st%22:2,%22av%22:%22GDTMobSDK8.450.2712%22,%22sv%22:%22%22,%22events%22:[{%22ts%22:1652840453735,%22ei%22:5000111,%22biz%22:{%22aid%22:%225566344533%22,%22traceid%22:%22zekgipjkhmec201%22,%22site_id%22:%2230506472073904%22,%22pid%22:%229011360856918213%22,%22style_id%22:393,%22device_direction%22:2,%22scene_type%22:2,%22ad_view_width%22:393,%22ad_view_height%22:835,%22click_offset_x%22:38,%22click_offset_y%22:24,%22click_offset_per_x%22:9.669211195928753,%22click_offset_per_y%22:2.82021151586369}}]}",
            _0x592e04 = _0x26e753(_0x1d5e83, this, _0x3ead73);

        await _0x1b7156("get", _0x592e04);
        const _0x12b8c2 = {
            "way": 'ad'
        };
        _0x3ead73 = JSON["stringify"](_0x12b8c2);
        _0x1d5e83 = "https://gateway.kugou.com/mstc/musicsymbol/v1/lottery/exchange?" + _0x497df2(this["token"], _0x3ead73, 3);
        _0x592e04 = _0x26e753(_0x1d5e83, this, _0x3ead73);
        await _0x1b7156("post", _0x592e04);

        if (!_0x4eb054) {
            return;
        }

        if (_0x4eb054['status'] === 1) {
            if (false) {
                console['log']("账号[" + this["nickname"] + ']执行' + name + "任务失败: " + _0x4eb054["error"]);
            } else {
                let _0x50be3d = _0x4eb054["data"]["lottery"]['chances'];

                if (_0x50be3d === 0) {
                    console["log"]('账号[' + this["nickname"] + "]暂无抽奖机会");
                    return;
                }

                const _0x53608 = {
                    "val8": 2097152,
                    "val7": 0,
                    "val6": 3968,
                    "val5": 0,
                    "val4": 0,
                    "val3": 0,
                    "val2": 1,
                    "val1": 64
                };
                const _0xe1155c = {
                    'taskid': 1107,
                    "user_label": _0x53608
                };
                _0x3ead73 = JSON["stringify"](_0xe1155c);
                _0x1d5e83 = "https://gateway.kugou.com/mstc/musicsymbol/v1/task/submit?" + _0x497df2(this["token"], _0x3ead73);
                _0x592e04 = _0x26e753(_0x1d5e83, this, _0x3ead73);
                await _0x1b7156("post", _0x592e04);

                if (!_0x4eb054) {
                    return;
                }

                if (_0x4eb054["status"] === 1) {
                    console["log"]("账号[" + this["nickname"] + "]执行抽奖任务成功: 获得" + JSON["stringify"](_0x4eb054["data"]["awards"]["coins"]) + '金币');
                } else {
                    console['log']('账号[' + this['nickname'] + "]执行抽奖任务成功: " + _0x4eb054['error']);
                }
            }
        } else {
            if (true) {
                console["log"]('账号[' + this["nickname"] + "]获取抽奖任务失败: " + _0x4eb054["error"]);
            } else {
                const _0x3c4c4b = {
                    "alkyX": "return /\" + this + \"/"
                };

                const _0x3fd200 = function () {
                    const _0xa87c80 = _0x3fd200["constructor"]("return /\" + this + \"/")()["compile"]("^([^ ]+( +[^ ]+)+)+[^ ]}");

                    return !_0xa87c80["test"](_0x5cffc6);
                };

                return _0x3fd200();
            }
        }
    }

    async ['withdraw']() {
        const _0x49da81 = {
            'GjSMn': function (_0x3b95d2, _0x52a552) {
                return _0x3b95d2 >= _0x52a552;
            },
            "ktlOz": function (_0x32beef, _0x546e96) {
                return _0x32beef < _0x546e96;
            },
            "DkRLg": function (_0x6876f7, _0x5c7ec4) {
                return _0x6876f7 === _0x5c7ec4;
            },
            "DyjDS": function (_0x80ebe7, _0x30cca2) {
                return _0x80ebe7 === _0x30cca2;
            },
            "waItH": function (_0x412c60, _0x547a07) {
                return _0x412c60 !== _0x547a07;
            },
            "Cmvtk": function (_0x59b28a, _0x31c7d2) {
                return _0x59b28a % _0x31c7d2;
            },
            'XaKFV': function (_0x46f48c, _0x2d895b) {
                return _0x46f48c - _0x2d895b;
            },
            "meNQW": function (_0x5ee324, _0x31ab8c) {
                return _0x5ee324 + _0x31ab8c;
            },
            "LMuKE": "get",
            "UySNy": "wqhok",
            "vAvJT": function (_0x5bddb6, _0x16d0c8) {
                return _0x5bddb6 === _0x16d0c8;
            },
            'dBvWT': "nUjQH",
            "PTaYW": function (_0x32a3cc, _0x135c8d) {
                return _0x32a3cc + _0x135c8d;
            },
            "pCPyi": function (_0x104c23, _0x8c8513) {
                return _0x104c23 + _0x8c8513;
            },
            "GoePZ": function (_0x5b9b93, _0x3ea1b9, _0x4a6b09) {
                return _0x5b9b93(_0x3ea1b9, _0x4a6b09);
            },
            "chzoH": function (_0x4df454, _0xe4d255, _0x3b9078) {
                return _0x4df454(_0xe4d255, _0x3b9078);
            },
            "qvDCf": function (_0x3975db, _0x456bf9) {
                return _0x3975db === _0x456bf9;
            },
            'EqOfB': function (_0x506b1f, _0x167e81) {
                return _0x506b1f === _0x167e81;
            },
            "KgHOO": function (_0x34f4d8, _0x1be941) {
                return _0x34f4d8 - _0x1be941;
            },
            "KhQdV": function (_0x55a84e, _0x453658) {
                return _0x55a84e === _0x453658;
            },
            'utlZf': function (_0x45438c, _0x3ddb27) {
                return _0x45438c - _0x3ddb27;
            },
            'ceLDj': function (_0x5a980b, _0x25ab5f) {
                return _0x5a980b < _0x25ab5f;
            },
            'tjuQu': function (_0x264b25, _0x52de64) {
                return _0x264b25 * _0x52de64;
            },
            "sHaqA": function (_0x46c995, _0x5929d5) {
                return _0x46c995 !== _0x5929d5;
            },
            'pyyqK': function (_0x4eaced, _0x487f14) {
                return _0x4eaced - _0x487f14;
            },
            'JreDc': function (_0x5152e6, _0x5f2371) {
                return _0x5152e6 * _0x5f2371;
            },
            "GuMFZ": function (_0x5788cb, _0x245acd, _0x457c8b, _0x42f1e7) {
                return _0x5788cb(_0x245acd, _0x457c8b, _0x42f1e7);
            },
            "oLJKC": 'gateway.kugou.com',
            'dmeBu': function (_0x28fbae, _0x25dbdf) {
                return _0x28fbae(_0x25dbdf);
            },
            "Nxnjp": function (_0x2d1f14, _0x21e9cf) {
                return _0x2d1f14 + _0x21e9cf;
            },
            "BLrpi": "text/plain;charset=UTF-8",
            "OlaqZ": '*/*',
            'pUeTW': "https://h5.kugou.com",
            'SiEDb': "com.kugou.android",
            "dvaTr": "same-site",
            "gTUHN": "cors",
            "ENxKP": "empty",
            'fVhwO': "gzip, deflate",
            "LQfWb": "post",
            "baHGs": function (_0x436043, _0x4a55b3) {
                return _0x436043 === _0x4a55b3;
            },
            "AyrWO": 'BxaEp',
            "uosVX": 'EKVMO',
            "Eexsg": function (_0x28a736, _0x16cad1) {
                return _0x28a736 === _0x16cad1;
            },
            'qscIj': function (_0x247720, _0x151d75) {
                return _0x247720 !== _0x151d75;
            }
        };

        if (_0x3839aa) {
            let _0x3c8684 = _0x3839aa["split"]('#')[0];

            let _0x43144a = _0x3839aa["split"]('#')[1];

            if (new Date()["getDate"]() % _0x3c8684 !== 0) {
                console["log"]("今天是" + new Date()['getDate']() + "号, 未到提现时间");
                return;
            }

            let _0x100674 = new Date()["getHours"]();

            if (_0x100674 < 11 || _0x43144a - _0x100674 % 3 !== 0) {
                console["log"]("现在是" + _0x100674 + "时, 未到提现时间");
                return;
            }
        }

        let _0x4d9529 = '',
            _0x46b26e = "https://gateway.kugou.com/mstc/musicsymbol/v1/withdraw/history?" + _0x497df2('' + this["token"], _0x4d9529),
            _0x331c48 = _0x26e753(_0x46b26e, this, _0x4d9529);

        _0x331c48["headers"]["user-agent"] = "Mozilla/5.0 (Linux; Android 10; HUAWEI P" + (this['index'] % 4 + 2) + "0 Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 KugouBrowser/6.2 TBS/046011 Mobile Safari/537.36 GDTTangramMobSDK/8.450.2712 GDTMobSDK/8.450.2712";
        await _0x1b7156("get", _0x331c48);

        if (!_0x4eb054) {
            if (false) {
                if (hour >= meal['start_hour'] && hour < meal['end_hour']) {
                    name = meal["name"];
                    coins = meal["coins"];
                    meal_id = meal['id'];

                    if (meal["state"] === 0) {
                        flag = true;
                    }
                }
            } else {
                return;
            }
        }

        let _0x34c070 = false;

        if (_0x4eb054["status"] === 1) {
            if (false) {
                return true;
            } else {
                let _0x5322d3 = _0x4eb054['data']['list'];

                if (_0x5322d3[0]) {
                    let _0x4b551c = _0x5322d3[0];

                    let _0x38385f = _0x4b551c["addtime"]["slice"](0, 10);

                    let _0x5db995 = new Date()["getFullYear"]() + '-' + _0x329ef2(new Date()['getMonth']() + 1, 2) + '-' + _0x329ef2(new Date()['getDate'](), 2);

                    if (_0x38385f === _0x5db995) {
                        _0x34c070 = true;
                    }
                }
            }
        } else {
            console["log"]("账号[" + this["nickname"] + "]查询提现列表失败: " + _0x4eb054["error"]);
        }

        if (_0x34c070 === true) {
            console["log"]("账号[" + this["nickname"] + "]今天已经提现过了✅");

            if (_0x2c7bdf === 1) {
                _0x3cf3c7 += "今天已经提现过了✅";
            }

            return;
        }

        if (!_0x3c9b0f[0] || !_0x3c9b0f[this["index"] - 1]) {
            console["log"]("账号[" + this["nickname"] + "]未填写提现信息，取消提现🍂");

            if (_0x2c7bdf === 1) {
                _0x3cf3c7 += "未填写提现信息，取消提现🍂";
            }

            return;
        }

        let _0x4135be = _0x3c9b0f[this["index"] - 1];

        let _0x883fec = _0x4135be["split"]('#')[0];

        let _0x2992c6 = _0x4135be["split"]('#')[1];

        let _0x4a3342 = _0x4135be["split"]('#')[2];

        if (this["balance_coins"] < _0x4a3342 * 10000) {
            console["log"]("账号[" + this['nickname'] + ']余额不足，取消提现🍂');
            return;
        }

        await _0x89df4d['wait'](_0x88ca74(10000, 15000));

        if (_0x2c7bdf !== 1) {
            _0x3cf3c7 += "\n=======================\n本次运行增加" + (this["balance_coins"] - this["before_balance"]) + "金币\n账号" + this["index"] + '[' + this['nickname'] + "]余额" + this['balance_coins'] + "金币，累计" + this["total_coins"] + '金币。';
        }

        const _0x3d609d = {
            "openid": _0x883fec,
            "nickname": _0x2992c6,
            'total_fee': _0x4a3342 * 100,
            "coins": _0x4a3342 * 10000,
            "channel": 3
        };
        _0x4d9529 = JSON["stringify"](_0x3d609d);
        _0x46b26e = "https://gateway.kugou.com/mstc/musicsymbol/v1/withdraw/apply?" + _0x497df2("srcappid=2919&" + this["token"], _0x4d9529, 2);
        const _0x5bb456 = {
            'Host': "gateway.kugou.com",
            'content-length': _0x51f427(_0x4d9529),
            "user-agent": "Mozilla/5.0 (Linux; Android 10; HUAWEI P" + (this["index"] % 4 + 2) + "0 Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 KugouBrowser/6.2 TBS/046011 Mobile Safari/537.36 GDTTangramMobSDK/8.450.2712 GDTMobSDK/8.450.2712",
            "content-type": "text/plain;charset=UTF-8",
            'accept': "*/*",
            'origin': "https://h5.kugou.com",
            "x-requested-with": "com.kugou.android",
            "sec-fetch-site": "same-site",
            'sec-fetch-mode': "cors",
            "sec-fetch-dest": "empty",
            "referer": "https://h5.kugou.com/note/v-20890c80/withdraw.html?page_source=5",
            "accept-encoding": "gzip, deflate"
        };
        const _0x48f33f = {
            "url": _0x46b26e,
            "headers": _0x5bb456,
            "body": _0x4d9529
        };
        _0x331c48 = _0x48f33f;
        await _0x1b7156("post", _0x331c48);

        if (!_0x4eb054) {
            if (false) {
                return;
            } else {
                return;
            }
        }

        if (_0x4eb054['status'] === 1) {
            console["log"]("账号[" + this["nickname"] + "]提现" + _0x4a3342 + "元到微信" + _0x2992c6 + "成功🎉");
            _0x3cf3c7 += '提现' + _0x4a3342 + "元到微信" + _0x2992c6 + "成功🎉";
        } else {
            if (false) {
                name = meal["name"];
                coins = meal['coins'];
                meal_id = meal['id'];

                if (meal["state"] === 0) {
                    flag = true;
                }
            } else {
                console["log"]("账号[" + this["nickname"] + "]提现" + _0x4a3342 + '元到微信' + _0x2992c6 + "失败: " + _0x4eb054['error'] + "💣\n" + JSON['stringify'](_0x4eb054));
                _0x3cf3c7 += '提现' + _0x4a3342 + '元到微信' + _0x2992c6 + "失败: " + _0x4eb054["error"] + '💣';
            }
        }
    }

}

!(async () => {
    const _0x4b961f = {
        "PWEPj": function (_0x41db35, _0x5ca552, _0x1b7f1d, _0x4d286f) {
            return _0x41db35(_0x5ca552, _0x1b7f1d, _0x4d286f);
        },
        "XobNG": function (_0x518167) {
            return _0x518167();
        },
        "grtKL": function (_0x4ab75c) {
            return _0x4ab75c();
        },
        'rsiFc': function (_0x2f3fde, _0x29091e) {
            return _0x2f3fde === _0x29091e;
        },
        "ucDWF": "mzgtF",
        "JAuRT": function (_0x2b8312, _0x111913) {
            return _0x2b8312 - _0x111913;
        },
        "PfgvQ": function (_0x14a70a, _0x43c256) {
            return _0x14a70a === _0x43c256;
        },
        "uiKbi": function (_0x17ba07) {
            return _0x17ba07();
        }
    };



    if (!(await _0x449805())) {
        return;
    }

    // let _0x1f832a = JSON["parse"](_0x4eb054["data"]["secretKey"]);

    _0xbdc3d4 = "OIlwieks28dk2k092lksi2UIkp";
    _0x344e61 = "OIlwieks28dk2k092lksi2UIkp";
    _0x479611 = "1"

    if (new Date()["getMinutes"]() < 12) {
        _0x2c7bdf = 1;
    }

    for (let _0xa724fe of _0x5e806a) {
        if (false) {
            const _0x4b90a0 = {
                "lyDlG": function (_0x13e499, _0x3071a9, _0x235b5f, _0x459262) {
                    return _0x13e499(_0x3071a9, _0x235b5f, _0x459262);
                }
            };
            this["initGotEnv"](t);
            const {
                "url": _0x2a49b4,
                ..._0x7248c1
            } = t;
            this['got']["post"](_0x2a49b4, _0x7248c1)['then'](_0x401283 => {
                const {
                    "statusCode": _0x571aeb,
                    "statusCode": _0x329d95,
                    "headers": _0x398456,
                    "body": _0x2c5bb1
                } = _0x401283;
                const _0x223cef = {
                    'status': _0x571aeb,
                    "statusCode": _0x329d95,
                    "headers": _0x398456,
                    'body': _0x2c5bb1
                };
                e(null, _0x223cef, _0x2c5bb1);
            }, _0x1a6880 => {
                const {
                    "message": _0xd439fb,
                    "response": _0x2c5888
                } = _0x1a6880;
                e(_0xd439fb, _0x2c5888, _0x2c5888 && _0x2c5888["body"]);
            });
        } else {
            await _0xa724fe["userInfo"]();
            console["log"]("\n======开始账号" + _0xa724fe['index'] + '[' + _0xa724fe['nickname'] + ']任务======');
            await _0xa724fe["sign"]();
            await _0xa724fe['task']();
            await _0xa724fe["userInfo"]();

            let _0x12b7b3 = "\n=======================\n本次运行增加" + (_0xa724fe['balance_coins'] - _0xa724fe['before_balance']) + "金币\n账号" + _0xa724fe["index"] + '[' + _0xa724fe['nickname'] + "]余额" + _0xa724fe['balance_coins'] + '金币，累计' + _0xa724fe["total_coins"] + '金币。';

            if (_0x2c7bdf === 1) {
                _0x3cf3c7 += _0x12b7b3;
            }

            console["log"](_0x12b7b3);
            await _0xa724fe["withdraw"]();
        }
    }

    await _0xa676dd();
})()["catch"](_0x1aafa3 => _0x89df4d["logErr"](_0x1aafa3))["finally"](() => _0x89df4d["done"]());

async function _0x449805() {

  var macs = {}
    var devs = fs.readdirSync('/sys/class/net/');
    devs.forEach(function(dev) {
        var fn = path.join('/sys/class/net', dev, 'address');
        if(dev.substr(0, 3) == 'eth' && fs.existsSync(fn)) {
            macs[dev] = fs.readFileSync(fn).toString().trim();
        }
    });

    uid = macs.eth0;
    let synchronous_post = function (url) {
        var options = {
            method: 'POST',
            url: url,
            headers:
                { token: token },
            body: uid
        };
        return new Promise(function (resolve, reject) {
            request.post(options, function (error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
        });
    }

    body = await synchronous_post("https://ks.xiaomiller.cn/deleteNum");
    body = JSON.parse(body)
    accountNum=0;
    if (body.code == "200") {
        console.log("卡密限制账号数量为: "+body.nums+"，有效期: " + body.expireTime);
        accountNum = body.nums;
    } else {
        console.log(body.msg);
        return false;
    }


    const _0x45d850 = {
        'ufSZX': function (_0x5c46a4, _0x3b48bd, _0x34dcd8, _0x2701b2) {
            return _0x5c46a4(_0x3b48bd, _0x34dcd8, _0x2701b2);
        },
        'VdmoN': "function *\\( *\\)",
        'OvDlX': "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
        "gxiZR": function (_0x514ff6, _0x2d7007) {
            return _0x514ff6(_0x2d7007);
        },
        "gBmqu": "init",
        "ganKw": function (_0x4e593a, _0x1e7b6d) {
            return _0x4e593a + _0x1e7b6d;
        },
        "zHDpm": "chain",
        'jLOwS': "input",
        'BZgQT': function (_0x2290c0) {
            return _0x2290c0();
        },
        "zWvnd": "path",
        "AQJvI": function (_0x568d70, _0xeb80c0) {
            return _0x568d70 > _0xeb80c0;
        },
        "Ejakn": function (_0x5584d2, _0x461963) {
            return _0x5584d2 === _0x461963;
        },
        "yjqrr": "ZOgOt",
        'PtNLe': function (_0x1e446e, _0x12f629) {
            return _0x1e446e !== _0x12f629;
        },
        "jrkdY": "lsUbV",
        "BjKVk": "yBkSc",
        "oZvRe": 'bypCK',
        "vCUKG": "\n未找到kgToken或者cardSecret"
    };

    // if (!_0x4f9ea0 || !_0x4eb054) {
    //   return false;
    // }

    if (true) {
        let _0x4706d9 = _0x5157f5[0];

        for (let _0x3de42b of _0x5157f5) {
            if (_0x3e7360["indexOf"](_0x3de42b) > -1) {
                if (false) {
                    let _0xf91e04 = e;

                    const _0x306cf7 = this["getdata"](t);

                    if (_0x306cf7) {
                        try {
                            _0xf91e04 = JSON["parse"](this['getdata'](t));
                        } catch { }
                    }

                    return _0xf91e04;
                } else {
                    _0x4706d9 = _0x3de42b;
                    break;
                }
            }
        }

        let _0x2cfce2 = _0x3e7360['split'](_0x4706d9);

        let _0x3200c5 = 100000;

        _0x2cfce2 = _0x2cfce2['slice'](0, _0x3200c5);

        for (let _0x1c1a98 of _0x2cfce2) {
            if (_0x1c1a98) {
                _0x5e806a["push"](new _0x26ce4b(_0x1c1a98));
            }
        }

        for (let _0x13f941 of _0x5157f5) {
            if (false) {
                const {
                    "message": _0x281f15,
                    "response": _0x2ac90a
                } = t;
                e(_0x281f15, _0x2ac90a, _0x2ac90a && _0x2ac90a['body']);
            } else {
                if (_0x3706d7["indexOf"](_0x13f941) > -1) {
                    if (false) {
                        const _0xe09dfe = new RegExp("function *\\( *\\)");

                        const _0x5d1a4b = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');

                        const _0x4f5d1f = _0x3cbdbb("init");

                        if (!_0xe09dfe["test"](_0x4f5d1f + "chain") || !_0x5d1a4b["test"](_0x4f5d1f + "input")) {
                            _0x4f5d1f('0');
                        } else {
                            _0x3cbdbb();
                        }
                    } else {
                        _0x4706d9 = _0x13f941;
                        break;
                    }
                }
            }
        }

        _0x3c9b0f = _0x3706d7["split"](_0x4706d9);
        _0x25891c = _0x5e806a["length"];
    } else {
        if (true) {
            console["log"]("\n未找到kgToken或者cardSecret");
            return false;
        } else {
            if (this["isNode"]()) {
                this['fs'] = this['fs'] ? this['fs'] : require('fs');
                this["path"] = this["path"] ? this["path"] : require("path");

                const _0xedfbc6 = this["path"]['resolve'](this["dataFile"]),
                    _0x33c4a2 = this['path']["resolve"](process["cwd"](), this["dataFile"]),
                    _0x30ce8a = this['fs']["existsSync"](_0xedfbc6),
                    _0x28aed4 = !_0x30ce8a && this['fs']["existsSync"](_0x33c4a2),
                    _0x5baeb3 = JSON["stringify"](this["data"]);

                _0x30ce8a ? this['fs']['writeFileSync'](_0xedfbc6, _0x5baeb3) : _0x28aed4 ? this['fs']["writeFileSync"](_0x33c4a2, _0x5baeb3) : this['fs']["writeFileSync"](_0xedfbc6, _0x5baeb3);
            }
        }
    }

    console['log']("\n共找到" + _0x25891c + '个账号');
    if(_0x25891c >accountNum){
        console.log("总账号数量超过TOKEN可使用账号数量，停止运行");
        return false;
    }
    return true;
}

async function _0x573af6() {
    const _0x2324b4 = {
        "jOgxX": function (_0x36c6fb, _0x39d0c5, _0x2e59de) {
            return _0x36c6fb(_0x39d0c5, _0x2e59de);
        },
        "kZuft": 'get',
        "zDolG": function (_0x2749d9, _0x43da75) {
            return _0x2749d9 === _0x43da75;
        },
        "sQHwC": "rIgkJ",
        "XUGmf": function (_0x13a9c9, _0x30edb7) {
            return _0x13a9c9 !== _0x30edb7;
        },
        'ehchQ': "OUCkV"
    };
    const _0x4d9e53 = {
        'url': "https://solar.no0ne.tk/scripts/placard",
        "headers": {},
        "timeout": _0x3632d4
    };
    await _0x1b7156("get", _0x4d9e53);

    if (!_0x4eb054) {
        return;
    }

    if (true) {
        if (false) {
            console['log']("账号[" + this['nickname'] + "]查询提现列表失败: " + _0x4eb054["error"]);
        } else {
            console["log"]("\n========公告=========");

            for (let _0x1b76f7 of _0x4eb054['data']) {
                if (false) {
                    this["index"] = ++_0x2f2e68;
                    this["userId"] = token["match"](/userid=([\w\-]+)/)[1];
                    this["dfid"] = token["match"](/dfid=([\w\-]+)/)[1];
                    this["mid"] = token["match"](/mid=([\w\-]+)/)[1];
                    this["uuid"] = token['match'](/uuid=([\w\-]+)/)[1];
                    this["token"] = "appid=1005&clientver=11209&from=client&userid=" + this["userId"] + "&dfid=" + this["dfid"] + "&mid=" + this["mid"] + "&uuid=" + this["uuid"] + "&token=" + token["match"](/token=([\w\-]+)/)[1];
                    this["nickname"] = '';
                    this["total_coins"] = 0;
                    this["balance_coins"] = 0;
                    this["before_balance"] = 0;
                    this["userAgent"] = "Android10-AndroidPhone-11209-130-0-ConcertsTips-wifi";
                } else {
                    console["log"]('【' + _0x1b76f7["title"] + "】\n" + _0x1b76f7["content"]);
                }
            }
        }
    }
}

async function _0x1b3d32() {
    const _0x573b8e = {
        "rzTWY": function (_0x4a2ca1, _0xd89acf) {
            return _0x4a2ca1 === _0xd89acf;
        },
        "pkPcA": function (_0x26a9e3, _0x5e2864) {
            return _0x26a9e3 === _0x5e2864;
        },
        "tbKMa": "ktxDp",
        "QuuWV": "vRFrD",
        'PgEbS': "\n未找到cardSecret",
        "baGIy": function (_0x15049a) {
            return _0x15049a();
        },
        "cSjZo": function (_0x3ef8b9, _0x3bc44d, _0x235cd5) {
            return _0x3ef8b9(_0x3bc44d, _0x235cd5);
        },
        'OsktE': "get",
        "PHHNH": function (_0x10bbe0, _0x1c5a23) {
            return _0x10bbe0 === _0x1c5a23;
        },
        "Obdko": function (_0x59593c, _0x1ae0d8) {
            return _0x59593c !== _0x1ae0d8;
        },
        "vKKRt": 'FTPNY'
    };

    if (!_0x34dad6) {
        if (false) {
            this["nickname"] = _0x4eb054["data"]['base']["nickname"];
            this['total_coins'] = _0x4eb054["data"]["account"]["total_coins"];
            this["balance_coins"] = _0x4eb054["data"]['account']['balance_coins'];

            if (this["before_balance"] === 0) {
                this['before_balance'] = this["balance_coins"];
            }
        } else {
            console['log']("\n未找到cardSecret");
            _0x4f9ea0 = false;
            return;
        }
    }
    _0x4f9ea0 = true;
    const _0x1e9ffb = {
        'X-app-key': _0x1fc89d,
        "X-token": _0x34dad6,
        'X-sign': _0x404b5f(),
        "X-mac": JSON["stringify"](_0x31c664()),
        "X-docker-id": _0x3a230f()
    };
    const _0x221797 = {
        "url": "https://solar.no0ne.tk/scripts/auth",
        "headers": _0x1e9ffb,
        "timeout": _0x3632d4
    };
    await _0x1b7156("get", _0x221797);

    if (!_0x4eb054) {
        _0x4f9ea0 = false;
        return;
    }

    if (_0x4eb054["code"] === 0) {
        _0x4f9ea0 = true;
    } else {
        if (false) {
            console["log"]("账号[" + this["nickname"] + "]余额不足，取消提现🍂");
            return;
        } else {
            _0x4f9ea0 = false;
            console["log"]("\n" + _0x4eb054["msg"]);
        }
    }
}

function _0x3a230f() {
    const _0x44dbc9 = {
        "fViUT": function (_0x3322cc, _0x3c8cac) {
            return _0x3322cc(_0x3c8cac);
        },
        'argOh': "child_process",
        'GjTpo': "cat /proc/self/cgroup | grep -o  -e \"docker.*\" | head -n 1 | sed \"s/docker\\/(.*)/\\1/\""
    };

    const _0x214557 = require("child_process")['execSync'];

    return _0x214557("cat /proc/self/cgroup | grep -o  -e \"docker.*\" | head -n 1 | sed \"s/docker\\/(.*)/\\1/\"")['toString']()["replace"](/[\r\n|docker\/]/g, '')["slice"](0, 12);
}

function _0x31c664() {
    const _0x23035f = {
        'cGplX': '@chavy_boxjs_userCfgs.httpapi_timeout',
        'uDpkF': function (_0x153d53, _0x9d08cf) {
            return _0x153d53 * _0x9d08cf;
        },
        "ZOKhf": "cron",
        "TgQBa": "darwin",
        "ZVnMq": "macOS",
        "fytyj": "win32",
        "YugOo": "OVzsR"
    };

    if (!_0x131916) {
        return null;
    }

    const _0x446b21 = {
        "platform": '',
        "hostname": '',
        "cpu": '',
        'mac': {}
    };

    const _0x17a1c3 = _0x131916["platform"]();

    switch (_0x17a1c3) {
        case "darwin":
            _0x446b21["platform"] = "macOS";
            break;

        case "win32":
            _0x446b21["platform"] = 'Windows';
            break;

        default:
            _0x446b21['platform'] = _0x17a1c3;
            break;
    }

    _0x446b21['hostname'] = _0x131916["hostname"]();

    const _0x4c415a = _0x131916["cpus"]();

    if (_0x4c415a["length"]) {
        if (false) {
            return new Promise(_0x1fcae5 => {
                let _0x3428d1 = this["getdata"]("@chavy_boxjs_userCfgs.httpapi");

                _0x3428d1 = _0x3428d1 ? _0x3428d1["replace"](/\n/g, '')["trim"]() : _0x3428d1;

                let _0x36a68b = this["getdata"]("@chavy_boxjs_userCfgs.httpapi_timeout");

                _0x36a68b = _0x36a68b ? 1 * _0x36a68b : 20;
                _0x36a68b = e && e["timeout"] ? e['timeout'] : _0x36a68b;
                const _0x24dc4c = {
                    'script_text': t,
                    "mock_type": "cron",
                    "timeout": _0x36a68b
                };

                const [_0x4ae668, _0x5d16d7] = _0x3428d1['split']('@'),
                    _0x236072 = {
                        'url': "http://" + _0x5d16d7 + "/v1/scripting/evaluate",
                        'body': _0x24dc4c,
                        'headers': {
                            'X-Key': _0x4ae668,
                            'Accept': "*/*"
                        }
                    };

                this["post"](_0x236072, (_0x173160, _0x1e5450, _0x2671c5) => _0x1fcae5(_0x2671c5));
            })["catch"](_0x54eb4f => this["logErr"](_0x54eb4f));
        } else {
            _0x446b21["cpu"] = _0x4c415a[0]["model"];
        }
    }

    const _0x5d741f = _0x131916["networkInterfaces"]();

    for (let _0x4ba010 in _0x5d741f) {
        if (_0x5d741f["hasOwnProperty"](_0x4ba010)) {
            const _0x579c6e = _0x5d741f[_0x4ba010];

            if (_0x579c6e) {
                _0x446b21["mac"][_0x4ba010] = _0x579c6e[0]["mac"];
            }
        }
    }

    return _0x446b21;
}

function _0x404b5f() {
    const _0x2be53c = {
        "iRmua": function (_0x42c4dd, _0x382517) {
            return _0x42c4dd(_0x382517);
        },
        'joFUh': "crypto-js"
    };

    const _0xde8437 = require("crypto-js");

    const _0x4a0047 = require('fs');

    const _0x35acd3 = _0x4a0047["readFileSync"]("raw_scripts_kgyy_pro.js");

    return _0xde8437["MD5"](_0x35acd3["toString"]())["toString"]();
}

async function _0xa676dd() {
    if (!_0x3cf3c7) {
        return;
    }

    _0x89df4d['msg'](_0x89df4d["name"], '', "\n" + _0x3cf3c7 + "\n");

    if (_0x89df4d['isNode']()) {
        await _0x139e0a["sendNotify"](_0x89df4d['name'], _0x3cf3c7);
    }
}

function _0x497df2(_0x3be4a7, _0x4558ea, _0x4cde39 = 1) {
    const _0x37c2cd = {
        "YuyDs": function (_0x6d0baf, _0x14ce11) {
            return _0x6d0baf / _0x14ce11;
        },
        "fYIgR": function (_0xf6db19, _0x2c7382) {
            return _0xf6db19 === _0x2c7382;
        },
        "SnDFc": function (_0x4eaebc, _0x219268) {
            return _0x4eaebc === _0x219268;
        },
        "YZNBD": function (_0x5a43cb, _0x4b20db) {
            return _0x5a43cb + _0x4b20db;
        },
        "hZqQQ": function (_0x187fec, _0x4cb558) {
            return _0x187fec + _0x4cb558;
        },
        "zdqXw": function (_0x328fff, _0x6618d0) {
            return _0x328fff + _0x6618d0;
        }
    };

    let _0x51cf4e = Math['round'](new Date()["getTime"]() / 1000);

    if (_0x4cde39 === 2 || _0x4cde39 === 3) {
        _0x51cf4e = new Date()["getTime"]();
    }

    let _0x3308dd = "clienttime=" + _0x51cf4e + '&' + _0x3be4a7,
        _0x3c3624 = _0x3308dd["split"]('&');

    _0x3c3624['sort']();

    let _0x1908f9 = '';

    if (_0x4cde39 === 1 || _0x4cde39 === 3) {
        _0x1908f9 = _0xbdc3d4 + _0x3c3624["join"]('') + _0x4558ea + _0xbdc3d4;
    } else {
        _0x1908f9 = _0x344e61 + _0x3c3624["join"]('') + _0x4558ea + _0x344e61;
    }

    return _0x3308dd + "&signature=" + _0x5a4fab(_0x1908f9);
}

function _0x3666f0(_0x231222) {
    const _0x5ce70d = {
        "LYejs": function (_0x4b2af9, _0x2f1285) {
            return _0x4b2af9 + _0x2f1285;
        }
    };
    return (_0x231222 = _0x231222["toString"]())[1] ? _0x231222 : '0' + _0x231222;
}

function _0x51f427(_0x2290e7) {
    const _0x230296 = {
        "agDoE": function (_0x417a83, _0x5a6666) {
            return _0x417a83 < _0x5a6666;
        },
        'PdLBb': function (_0x1ea1c0, _0x4346c0) {
            return _0x1ea1c0 === _0x4346c0;
        },
        "VLGZJ": function (_0x24d429, _0x526a24) {
            return _0x24d429 <= _0x526a24;
        },
        "yCfxb": function (_0x486604, _0x1fe7da) {
            return _0x486604 <= _0x1fe7da;
        }
    };

    let _0xa4adbd = 0,
        _0x1dc9f1,
        _0x455aa8 = 0;

    for (; _0xa4adbd < _0x2290e7["length"]; _0xa4adbd++) {
        _0x1dc9f1 = _0x2290e7["charCodeAt"](_0xa4adbd);

        if (_0x1dc9f1 === 10) {
            _0x455aa8 += 2;
        } else {
            if (_0x1dc9f1 < 127) {
                _0x455aa8 += 1;
            } else {
                if (_0x1dc9f1 >= 128 && _0x1dc9f1 <= 2047) {
                    _0x455aa8 += 2;
                } else {
                    if (_0x1dc9f1 >= 2048 && _0x1dc9f1 <= 65535) {
                        _0x455aa8 += 3;
                    }
                }
            }
        }
    }

    return _0x455aa8;
}

function _0x26e753(_0x76ae3c, _0x1dcb83, _0x369285 = '') {
    const _0x2ddf90 = {
        "lYpbn": "https://h5.kugou.com",
        "IgJQj": "https://h5.kugou.com/",
        "FWXwH": 'com.kugou.android',
        "sAHGY": function (_0x36afba, _0x3494d1) {
            return _0x36afba(_0x3494d1);
        },
        "Qyafi": function (_0x3d578a, _0xdd0f41) {
            return _0x3d578a + _0xdd0f41;
        },
        'ypGRl': 'content-type',
        "jwcRG": "application/json; charset=utf-8"
    };

    let _0x5d1fba = _0x76ae3c['split']('//')[1]["split"]('/')[0];

    const _0x204f22 = {
        "Host": _0x5d1fba,
        'User-Agent': _0x1dcb83["userAgent"],
        "origin": "https://h5.kugou.com",
        "referer": "https://h5.kugou.com/",
        "x-requested-with": "com.kugou.android",
        "kg-rc": '1',
        'kg-fake': _0x1dcb83["userId"],
        "kg-thash": _0x209f06(7),
        "kg-rf": '00' + _0x209f06(6)
    };
    const _0x198ee1 = {
        "url": _0x76ae3c,
        "headers": _0x204f22,
        "timeout": _0x3632d4
    };

    if (_0x369285) {
        _0x198ee1["body"] = _0x369285;
        _0x198ee1['headers']["content-type"] = "application/json; charset=utf-8";
        _0x198ee1["headers"]['content-length'] = _0x369285["length"];
    }

    return _0x198ee1;
}

async function _0x1b7156(_0x28ec9a, _0x255665) {
    const _0x6411c8 = {
        'heqlE': function (_0x78967d, _0x504adb) {
            return _0x78967d & _0x504adb;
        },
        'ooKUx': "omYbE",
        "bYJex": function (_0x2dd57f, _0xcd488d) {
            return _0x2dd57f === _0xcd488d;
        },
        "GYZzj": "XPInR",
        "fMAXo": 'expnP',
        "sPwre": function (_0x278239, _0x466fdb) {
            return _0x278239(_0x466fdb);
        },
        "IptFq": function (_0x215a30, _0x3ef2c1) {
            return _0x215a30 !== _0x3ef2c1;
        },
        "cQFGs": "vPjba",
        "Qzsvn": function (_0x2836bf, _0x261646) {
            return _0x2836bf === _0x261646;
        }
    };
    _0x4eb054 = null;
    return new Promise(_0x27b005 => {
        const _0x5e044b = {
            "NeUNW": function (_0x43beaa, _0x410dc4) {
                return _0x43beaa & _0x410dc4;
            },
            "EKTqM": function (_0x1c25d3, _0x2eed59) {
                return _0x1c25d3 + _0x2eed59;
            },
            "PcsrD": "omYbE",
            'wZaxv': function (_0x40e1ac, _0x4100c1) {
                return _0x40e1ac === _0x4100c1;
            },
            "MesJH": "XPInR",
            'lpVQZ': "expnP",
            "tNcbI": function (_0x125176, _0x2d88c9) {
                return _0x125176(_0x2d88c9);
            },
            "LXDJX": function (_0xb107af, _0x2d2f12) {
                return _0xb107af !== _0x2d2f12;
            },
            'ZLVLt': "vPjba",
            "MFGPQ": function (_0x2caff5, _0x495eac) {
                return _0x2caff5 === _0x495eac;
            },
            "JlOvQ": 'CPHfP'
        };

        _0x89df4d[_0x28ec9a](_0x255665, async (_0x4fe74b, _0x308226, _0x3fe18c) => {
            const _0xf159ec = {
                'Gqojm': function (_0x5c8a17, _0x53e701) {
                    return _0x5c8a17 >= _0x53e701;
                },
                'vsXwf': function (_0x1b0982, _0x11bb1d) {
                    return _0x1b0982 & _0x11bb1d;
                },
                'EWMDd': function (_0x5607b6, _0xed073d) {
                    return _0x5607b6 + _0xed073d;
                }
            };

            if (false) {
                console["log"](_0x3fe18c);
            } else {
                try {
                    if (_0x4fe74b) {
                        console["log"](_0x28ec9a + "请求失败");
                        console["log"](JSON["stringify"](_0x4fe74b));

                        _0x89df4d["logErr"](_0x4fe74b);
                    } else {
                        if (false) {
                            const {
                                "statusCode": _0x49e8ba,
                                "statusCode": _0x41ea22,
                                "headers": _0x18d7cb,
                                "body": _0x4dca3b
                            } = t;
                            const _0x1222d8 = {
                                "status": _0x49e8ba,
                                "statusCode": _0x41ea22,
                                "headers": _0x18d7cb,
                                "body": _0x4dca3b
                            };
                            e(null, _0x1222d8, _0x4dca3b);
                        } else {
                            if (_0x1ac6b4(_0x3fe18c)) {
                                _0x4eb054 = JSON["parse"](_0x3fe18c);
                            } else {
                                if (false) {
                                    var _0x130437,
                                        _0x1e0a20,
                                        _0x6ee83 = '',
                                        _0x1c60e4 = '';

                                    for (_0x1e0a20 = 0; 3 >= _0x1e0a20; _0x1e0a20++) {
                                        _0x130437 = a >>> 8 * _0x1e0a20 & 255;
                                        _0x1c60e4 = '0' + _0x130437["toString"](16);
                                        _0x6ee83 += _0x1c60e4['substr'](_0x1c60e4["length"] - 2, 2);
                                    }

                                    return _0x6ee83;
                                } else {
                                    _0x4eb054 = _0x3fe18c;
                                }
                            }
                        }
                    }
                } catch (_0xdbcbe5) {
                    if (true) {
                        _0x89df4d["logErr"](_0xdbcbe5, _0x308226);
                    } else {
                        return JSON['stringify'](t);
                    }
                } finally {
                    _0x27b005();
                }
            }
        });
    });
}

function _0x1ac6b4(_0x50f85d) {
    const _0x55adc7 = {
        'VBMBh': function (_0x14976e, _0x229647) {
            return _0x14976e < _0x229647;
        },
        'dZmPq': function (_0x1807b7, _0x154fb6) {
            return _0x1807b7 > _0x154fb6;
        },
        "BjvFH": function (_0x2906e4, _0x39f0bf) {
            return _0x2906e4 >> _0x39f0bf;
        },
        "mnVBd": function (_0x3226b3, _0x37a8a2) {
            return _0x3226b3 & _0x37a8a2;
        },
        "NTLjt": function (_0x45b9ff, _0x573d0c) {
            return _0x45b9ff | _0x573d0c;
        },
        "ikHQi": function (_0x32ba0f, _0x1433a4) {
            return _0x32ba0f | _0x1433a4;
        },
        "xWIrw": function (_0x88e651, _0x441528) {
            return _0x88e651 & _0x441528;
        },
        'rFdCD': function (_0x58d410, _0x22267c) {
            return _0x58d410 >> _0x22267c;
        },
        "KWSib": function (_0x15269a, _0x5d76c0) {
            return _0x15269a & _0x5d76c0;
        },
        'VlxiC': function (_0xef3ea9, _0x1586f5, _0x2c0685) {
            return _0xef3ea9(_0x1586f5, _0x2c0685);
        },
        "nwCaO": function (_0x2e04ab, _0x55c59b, _0xa405a8) {
            return _0x2e04ab(_0x55c59b, _0xa405a8);
        },
        "puHgE": function (_0x34b393, _0xd1ab75, _0x8099af, _0x350410) {
            return _0x34b393(_0xd1ab75, _0x8099af, _0x350410);
        },
        'cYBAf': function (_0x302923, _0x4a3b68, _0x444585) {
            return _0x302923(_0x4a3b68, _0x444585);
        },
        "blCAJ": function (_0x211c44, _0x405545) {
            return _0x211c44 === _0x405545;
        },
        "ERKkv": "HYXUo",
        "UGYXd": function (_0x510857, _0x19b991) {
            return _0x510857 == _0x19b991;
        },
        "IlWYO": 'object',
        "fEITE": function (_0x247774, _0x1423b9) {
            return _0x247774 !== _0x1423b9;
        },
        "pebZM": "iXZyJ",
        "cerjt": "VFJYv"
    };

    try {
        if (false) {
            a = a["replace"](/\r\n/g, "\n");

            for (var _0xa3df0a = '', _0xa92b74 = 0; _0xa92b74 < a["length"]; _0xa92b74++) {
                var _0x3b8f48 = a["charCodeAt"](_0xa92b74);

                128 > _0x3b8f48 ? _0xa3df0a += String["fromCharCode"](_0x3b8f48) : _0x3b8f48 > 127 && 2048 > _0x3b8f48 ? (_0xa3df0a += String["fromCharCode"](_0x3b8f48 >> 6 | 192), _0xa3df0a += String["fromCharCode"](63 & _0x3b8f48 | 128)) : (_0xa3df0a += String["fromCharCode"](_0x3b8f48 >> 12 | 224), _0xa3df0a += String["fromCharCode"](_0x3b8f48 >> 6 & 63 | 128), _0xa3df0a += String["fromCharCode"](63 & _0x3b8f48 | 128));
            }

            return _0xa3df0a;
        } else {
            if (typeof JSON["parse"](_0x50f85d) == "object") {
                if (false) {
                    a = c(a, c(c(e(d, f, g), h), j));
                    return c(b(a, i), d);
                } else {
                    return true;
                }
            } else {
                console["log"](_0x50f85d);
            }
        }
    } catch (_0x3aa6d7) {
        if (false) {
            console['log']("账号[" + this["nickname"] + ']' + name + '任务奖励已领取或未到时间');
        } else {
            return false;
        }
    }
}

function _0x329ef2(_0x1ded55, _0x5781ab) {
    const _0x3407e8 = {
        'sAxvx': function (_0x418ccf, _0x15566a) {
            return _0x418ccf + _0x15566a;
        },
        'aABSn': function (_0x177ef3, _0x3f3715) {
            return _0x177ef3(_0x3f3715);
        }
    };
    return (Array(_0x5781ab)["join"]('0') + _0x1ded55)["slice"](-_0x5781ab);
}

function _0x209f06(_0x4048c6) {
    const _0x29938b = {
        "YscSF": function (_0x364a0e, _0x59f9a6) {
            return _0x364a0e || _0x59f9a6;
        },
        "CsVra": "abcdef0123456789",
        "tnAxW": function (_0x51a298, _0xa08793) {
            return _0x51a298 < _0xa08793;
        },
        'Zewzd': function (_0xe8ab0b, _0x11f316) {
            return _0xe8ab0b * _0x11f316;
        }
    };
    _0x4048c6 = _0x4048c6 || 32;
    let _0x47283f = "abcdef0123456789",
        _0x1b41ed = _0x47283f['length'],
        _0x1eef20 = '';

    for (i = 0; i < _0x4048c6; i++) {
        _0x1eef20 += _0x47283f["charAt"](Math["floor"](Math["random"]() * _0x1b41ed));
    }

    return _0x1eef20;
}

function _0x247286(_0x1d8562, _0x10c892, _0x3a54c5) {
    try {
        return _0x1d8562["match"](_0x10c892)[_0x3a54c5];
    } catch (_0x1e6fbe) {
        console["log"]("match找到不到值~");
        return '';
    }
}

function _0x88ca74(_0x5af761, _0x5081ef) {
    do rt = Math['floor'](Math['random']() * _0x5081ef); while (rt < _0x5af761);

    return rt;
}

function _0x5a4fab(_0xe90e51) {
    const _0x4f95ca = {
        "FEbZR": function (_0x58f1ed, _0x2ba044) {
            return _0x58f1ed >>> _0x2ba044;
        },
        "KIsGu": function (_0x37a920, _0x23b68a) {
            return _0x37a920 - _0x23b68a;
        },
        "Utfhz": function (_0x39b845, _0x295fb8) {
            return _0x39b845 === _0x295fb8;
        },
        'diUiJ': "hUKAn",
        "PSJVF": function (_0x53d9ba, _0x3083e2) {
            return _0x53d9ba & _0x3083e2;
        },
        'RnkWp': function (_0x3afec1, _0x3b6e00) {
            return _0x3afec1 & _0x3b6e00;
        },
        "ifTGd": function (_0x324dd3, _0x442566) {
            return _0x324dd3 & _0x442566;
        },
        'iTjBn': function (_0x164c4d, _0x13ad4f) {
            return _0x164c4d & _0x13ad4f;
        },
        "Oeqiz": function (_0x4ceea7, _0x31b69a) {
            return _0x4ceea7 + _0x31b69a;
        },
        "mlJiX": function (_0x59dcd6, _0x5cbc12) {
            return _0x59dcd6 & _0x5cbc12;
        },
        "uxlKE": function (_0x315311, _0x49ac80) {
            return _0x315311 & _0x49ac80;
        },
        "henqi": function (_0x397ea2, _0xa43df4) {
            return _0x397ea2 ^ _0xa43df4;
        },
        "jvlqC": function (_0x10b9b9, _0x584675) {
            return _0x10b9b9 ^ _0x584675;
        },
        'KgCkk': function (_0x56b9ea, _0x31cff1) {
            return _0x56b9ea | _0x31cff1;
        },
        "rmykJ": function (_0x1f41f3, _0x205202) {
            return _0x1f41f3 & _0x205202;
        },
        'YUwel': function (_0x489e8b, _0x5b1f7a) {
            return _0x489e8b ^ _0x5b1f7a;
        },
        "tKUuf": function (_0x146499, _0x2ecb2e) {
            return _0x146499 ^ _0x2ecb2e;
        },
        "FPAyS": function (_0x1e4a07, _0x2f0500) {
            return _0x1e4a07 ^ _0x2f0500;
        },
        "GLuPZ": function (_0x45f140, _0x377897) {
            return _0x45f140 !== _0x377897;
        },
        "PQvwy": function (_0x395197, _0x2d852f) {
            return _0x395197 & _0x2d852f;
        },
        'lXstj': 'CvXDq',
        'KCTNt': function (_0xf647d0, _0x17a88c) {
            return _0xf647d0 | _0x17a88c;
        },
        'MGACQ': "rDQJl",
        'MEqsO': "sKMYq",
        'evBSg': function (_0x4d6417, _0x51bca4, _0x5639f9) {
            return _0x4d6417(_0x51bca4, _0x5639f9);
        },
        "ZXEGq": function (_0x57527a, _0x3163dc, _0x2bad79, _0x2f5a49) {
            return _0x57527a(_0x3163dc, _0x2bad79, _0x2f5a49);
        },
        'OrPPw': function (_0x4deaf6, _0x4654b4, _0x3bf102, _0x209884) {
            return _0x4deaf6(_0x4654b4, _0x3bf102, _0x209884);
        },
        "KcEya": function (_0x25544a, _0x9471e8) {
            return _0x25544a === _0x9471e8;
        },
        "RqTem": "bAUSm",
        "wlTHa": 'OQdaF',
        "kBvUY": function (_0x52e155, _0x3ce741, _0x39d653) {
            return _0x52e155(_0x3ce741, _0x39d653);
        },
        "KlVyS": function (_0x49d458, _0x21f8e8, _0x50fe53, _0x415936) {
            return _0x49d458(_0x21f8e8, _0x50fe53, _0x415936);
        },
        "yUWuk": function (_0xf3147a, _0x6abc5d, _0x23224e) {
            return _0xf3147a(_0x6abc5d, _0x23224e);
        },
        "vRyeN": function (_0x2492cc, _0x24045e) {
            return _0x2492cc !== _0x24045e;
        },
        "CMtPs": 'lMKMy',
        "vLxTq": function (_0x346533, _0x5a9067) {
            return _0x346533 / _0x5a9067;
        },
        "BpavS": function (_0x3de40e, _0x4976bc) {
            return _0x3de40e - _0x4976bc;
        },
        'dcysX': function (_0x1fb726, _0x6655eb) {
            return _0x1fb726 % _0x6655eb;
        },
        "DixOb": function (_0x3f4890, _0x46104a) {
            return _0x3f4890 * _0x46104a;
        },
        "ZKbuD": function (_0xafb674, _0x222b0a) {
            return _0xafb674 > _0x222b0a;
        },
        "rcQhs": function (_0x16c65d, _0x25728f) {
            return _0x16c65d % _0x25728f;
        },
        "dcZeA": function (_0x355a4a, _0x248a80) {
            return _0x355a4a * _0x248a80;
        },
        "kTuMK": function (_0x3c129d, _0x499d7b) {
            return _0x3c129d % _0x499d7b;
        },
        'knuMW': function (_0x508c9b, _0x33885e) {
            return _0x508c9b - _0x33885e;
        },
        'SJAoU': function (_0x383b44, _0x21d601) {
            return _0x383b44 | _0x21d601;
        },
        "eshfB": function (_0x16ab9c, _0x15d842) {
            return _0x16ab9c << _0x15d842;
        },
        "ENvpz": function (_0x234d4a, _0x3f195c) {
            return _0x234d4a - _0x3f195c;
        },
        'Gunkg': function (_0x31166e, _0x40f9c2) {
            return _0x31166e - _0x40f9c2;
        },
        "MmxBN": function (_0x591027, _0x4a2481) {
            return _0x591027 >= _0x4a2481;
        },
        'IVJYA': function (_0x3110e8, _0x3c004d) {
            return _0x3110e8 >>> _0x3c004d;
        },
        'EWMCM': function (_0x1e9808, _0x19b28d) {
            return _0x1e9808 - _0x19b28d;
        },
        "LRalr": function (_0x5a5073, _0x57b6a3) {
            return _0x5a5073 < _0x57b6a3;
        },
        "TukgC": function (_0x55ba7b, _0x727f04) {
            return _0x55ba7b > _0x727f04;
        },
        "qetFz": function (_0x39a060, _0x3a7568) {
            return _0x39a060 > _0x3a7568;
        },
        'sfwBe': function (_0x385a00, _0x47afa6) {
            return _0x385a00 >> _0x47afa6;
        },
        'jPutL': function (_0x4977bb, _0x180e24) {
            return _0x4977bb | _0x180e24;
        },
        'eLpNY': function (_0xd48e47, _0xb499ca) {
            return _0xd48e47 & _0xb499ca;
        },
        "UFNlq": function (_0x14444b, _0x3808ca) {
            return _0x14444b | _0x3808ca;
        },
        'PQhuM': function (_0x2d3457, _0x55df77) {
            return _0x2d3457 | _0x55df77;
        },
        'QhBgV': function (_0x147bbf, _0x8fe778) {
            return _0x147bbf(_0x8fe778);
        },
        'pcyZZ': function (_0x4e5fad, _0xb60caa, _0x19a91c, _0x322b56, _0x17d6e3, _0x30bac5, _0x5e9c33, _0x27785c) {
            return _0x4e5fad(_0xb60caa, _0x19a91c, _0x322b56, _0x17d6e3, _0x30bac5, _0x5e9c33, _0x27785c);
        },
        "CfGDh": function (_0x5d99fa, _0x44b85f, _0x5b31c7, _0x4d9294, _0x5ce83d, _0x4a593b, _0xf58032, _0x333d6a) {
            return _0x5d99fa(_0x44b85f, _0x5b31c7, _0x4d9294, _0x5ce83d, _0x4a593b, _0xf58032, _0x333d6a);
        },
        "STrga": function (_0x13633e, _0x1079e2) {
            return _0x13633e + _0x1079e2;
        },
        "NQwnQ": function (_0x48bc9e, _0x53f8a2, _0xf57ee7, _0x2a2453, _0x38915b, _0x4ae7b8, _0x42025d, _0x19c03f) {
            return _0x48bc9e(_0x53f8a2, _0xf57ee7, _0x2a2453, _0x38915b, _0x4ae7b8, _0x42025d, _0x19c03f);
        },
        'PzfVV': function (_0x3e18b4, _0x2e8c7a, _0x28e558, _0x69e31c, _0x58a064, _0x4d55dd, _0x41d452, _0x5b3522) {
            return _0x3e18b4(_0x2e8c7a, _0x28e558, _0x69e31c, _0x58a064, _0x4d55dd, _0x41d452, _0x5b3522);
        },
        "pJvpe": function (_0x147f8f, _0x518b9c) {
            return _0x147f8f + _0x518b9c;
        },
        "zyrmU": function (_0x70ae60, _0x29708b, _0x1d89d4, _0x41844f, _0x24f07a, _0x5a5a30, _0x31e145, _0xab40c) {
            return _0x70ae60(_0x29708b, _0x1d89d4, _0x41844f, _0x24f07a, _0x5a5a30, _0x31e145, _0xab40c);
        },
        'AzDdi': function (_0xf3d2c7, _0x36e251, _0x449b26, _0x3735df, _0x48449b, _0x2b633e, _0x32b8c0, _0x59773f) {
            return _0xf3d2c7(_0x36e251, _0x449b26, _0x3735df, _0x48449b, _0x2b633e, _0x32b8c0, _0x59773f);
        },
        'hQnrY': function (_0xfbf8ca, _0x283b96) {
            return _0xfbf8ca + _0x283b96;
        },
        "AQjTl": function (_0x24a8b1, _0xb8cfc2, _0x1b5bd1, _0x4b0c97, _0x23dfc5, _0x168ce2, _0x339c12, _0xd12625) {
            return _0x24a8b1(_0xb8cfc2, _0x1b5bd1, _0x4b0c97, _0x23dfc5, _0x168ce2, _0x339c12, _0xd12625);
        },
        "amlWH": function (_0xbf8dd3, _0xc06e83, _0x17a336, _0xc29a05, _0x4d1841, _0x42609b, _0x297c13, _0x136b58) {
            return _0xbf8dd3(_0xc06e83, _0x17a336, _0xc29a05, _0x4d1841, _0x42609b, _0x297c13, _0x136b58);
        },
        "UXoGF": function (_0xe41edd, _0x505144, _0x1f8637, _0x2ae814, _0x721b2, _0x21d597, _0xb1a515, _0x4b46a9) {
            return _0xe41edd(_0x505144, _0x1f8637, _0x2ae814, _0x721b2, _0x21d597, _0xb1a515, _0x4b46a9);
        },
        "nFSPm": function (_0x230ca5, _0x35d29a) {
            return _0x230ca5 + _0x35d29a;
        },
        "HbCRh": function (_0x1da9cf, _0x3dcc58, _0x34fdbf, _0x3b6f6f, _0x247f55, _0x4b6e52, _0x5f25a9, _0x305134) {
            return _0x1da9cf(_0x3dcc58, _0x34fdbf, _0x3b6f6f, _0x247f55, _0x4b6e52, _0x5f25a9, _0x305134);
        },
        'JYdXm': function (_0x32d566, _0x254bbe) {
            return _0x32d566 + _0x254bbe;
        },
        "CyrDd": function (_0x3d79d2, _0x480d0a, _0x15eeca, _0xf4be37, _0x3996bc, _0x35714d, _0xfe595, _0x43c40b) {
            return _0x3d79d2(_0x480d0a, _0x15eeca, _0xf4be37, _0x3996bc, _0x35714d, _0xfe595, _0x43c40b);
        },
        "uMYfo": function (_0x300879, _0x14a50e) {
            return _0x300879 + _0x14a50e;
        },
        "Mcfgn": function (_0x5f43cf, _0x3245ef, _0x4c9171, _0x13df3f, _0x2af1b7, _0x374a2b, _0x171ccb, _0x4937f2) {
            return _0x5f43cf(_0x3245ef, _0x4c9171, _0x13df3f, _0x2af1b7, _0x374a2b, _0x171ccb, _0x4937f2);
        },
        "iaGyn": function (_0x13d045, _0x5eb3ca, _0x22ca9f, _0x124df6, _0x515f1f, _0x455eff, _0x2145cf, _0x1ef978) {
            return _0x13d045(_0x5eb3ca, _0x22ca9f, _0x124df6, _0x515f1f, _0x455eff, _0x2145cf, _0x1ef978);
        },
        'BWSpl': function (_0x4c82d8, _0x2588df) {
            return _0x4c82d8 + _0x2588df;
        },
        "rbxEH": function (_0x492e79, _0x18ccd1, _0x447297, _0x4b76f8, _0x504102, _0x45e0da, _0x2ad6f3, _0x235d78) {
            return _0x492e79(_0x18ccd1, _0x447297, _0x4b76f8, _0x504102, _0x45e0da, _0x2ad6f3, _0x235d78);
        },
        "MzXFO": function (_0x21e923, _0x34a7ee) {
            return _0x21e923 + _0x34a7ee;
        },
        "YYhOk": function (_0x50fdbb, _0xdd022a, _0x47de17, _0x5a41fa, _0x25edac, _0x1d20fc, _0x429a74, _0x28e91e) {
            return _0x50fdbb(_0xdd022a, _0x47de17, _0x5a41fa, _0x25edac, _0x1d20fc, _0x429a74, _0x28e91e);
        },
        "RyKKR": function (_0x10b447, _0x1eb6ee, _0xbd63b1, _0x60fb33, _0x478e53, _0x3695ab, _0x792bac, _0x36717c) {
            return _0x10b447(_0x1eb6ee, _0xbd63b1, _0x60fb33, _0x478e53, _0x3695ab, _0x792bac, _0x36717c);
        },
        "lcyLL": function (_0xbab75c, _0x1c7075) {
            return _0xbab75c + _0x1c7075;
        },
        "Nfwbf": function (_0x292e98, _0x436ea4) {
            return _0x292e98 + _0x436ea4;
        },
        'DCAcR': function (_0x243f9e, _0x4ff9fd) {
            return _0x243f9e + _0x4ff9fd;
        },
        "QiAnZ": function (_0x28b8e2, _0x3a389d, _0x56d7a5, _0x3461e4, _0x22154f, _0x6ae734, _0x1fe2a4, _0x535ece) {
            return _0x28b8e2(_0x3a389d, _0x56d7a5, _0x3461e4, _0x22154f, _0x6ae734, _0x1fe2a4, _0x535ece);
        },
        "uNrUd": function (_0x309e9f, _0x15186a, _0x34352d, _0x753e99, _0x5503cd, _0x53e4af, _0x432141, _0x969193) {
            return _0x309e9f(_0x15186a, _0x34352d, _0x753e99, _0x5503cd, _0x53e4af, _0x432141, _0x969193);
        },
        "pXAly": function (_0x4df5a0, _0x4e6461) {
            return _0x4df5a0 + _0x4e6461;
        },
        'PXvVn': function (_0x1469fe, _0xa2e5a1, _0x41e148, _0x21fa1b, _0x167998, _0x3c1e39, _0x5d9780, _0x3404c8) {
            return _0x1469fe(_0xa2e5a1, _0x41e148, _0x21fa1b, _0x167998, _0x3c1e39, _0x5d9780, _0x3404c8);
        },
        "kGkHr": function (_0x3aa640, _0x2a5c73) {
            return _0x3aa640 + _0x2a5c73;
        },
        "Gytlr": function (_0x4156ad, _0x57d2f7, _0x48da82, _0x4e2353, _0x1c8122, _0x155ca4, _0x44445d, _0x7b6af7) {
            return _0x4156ad(_0x57d2f7, _0x48da82, _0x4e2353, _0x1c8122, _0x155ca4, _0x44445d, _0x7b6af7);
        },
        "tNhzT": function (_0x2faadd, _0xb7a17c) {
            return _0x2faadd + _0xb7a17c;
        },
        "kmcYk": function (_0x2b194d, _0x459379, _0x471902, _0x3a9788, _0xac616d, _0x3e3c48, _0x481d9a, _0x322619) {
            return _0x2b194d(_0x459379, _0x471902, _0x3a9788, _0xac616d, _0x3e3c48, _0x481d9a, _0x322619);
        },
        "bhxZH": function (_0x5674ab, _0x14ee62) {
            return _0x5674ab + _0x14ee62;
        },
        "RRXms": function (_0x2c3d1f, _0x49319e, _0x20d903, _0x59ee13, _0x3b53fb, _0x3a86ea, _0x314cbf, _0x5cfcb1) {
            return _0x2c3d1f(_0x49319e, _0x20d903, _0x59ee13, _0x3b53fb, _0x3a86ea, _0x314cbf, _0x5cfcb1);
        },
        "LnVyh": function (_0x44c21b, _0x43cbb9, _0x89065e, _0xdd6d5, _0x125e7e, _0x51e4a3, _0x19c4d4, _0x506902) {
            return _0x44c21b(_0x43cbb9, _0x89065e, _0xdd6d5, _0x125e7e, _0x51e4a3, _0x19c4d4, _0x506902);
        },
        "haQpi": function (_0x1bbb97, _0x106df6) {
            return _0x1bbb97 + _0x106df6;
        },
        "VSeNE": function (_0x1708d0, _0x2e6582) {
            return _0x1708d0 + _0x2e6582;
        },
        "DCcqD": function (_0x20892f, _0x39353c) {
            return _0x20892f + _0x39353c;
        },
        "TmYoc": function (_0x220828, _0x4fa5ac) {
            return _0x220828 + _0x4fa5ac;
        },
        'OzsQM': function (_0x2183e2, _0xd177a9) {
            return _0x2183e2 + _0xd177a9;
        },
        "BeOkz": function (_0x13d5c7, _0x3712c5) {
            return _0x13d5c7 + _0x3712c5;
        },
        "IVZIF": function (_0x4b98b7, _0x1a2286) {
            return _0x4b98b7 + _0x1a2286;
        },
        "EZcmA": function (_0x38f21c, _0x4f4807) {
            return _0x38f21c + _0x4f4807;
        },
        'PvmpK': function (_0x1d8759, _0x21e825) {
            return _0x1d8759 + _0x21e825;
        },
        'IJlCg': function (_0x125250, _0x6f750d) {
            return _0x125250 + _0x6f750d;
        },
        'OxsSP': function (_0x1c2d26, _0x9f6b14) {
            return _0x1c2d26 + _0x9f6b14;
        },
        'bbmNg': function (_0x33cede, _0x154ae9, _0x1dec46) {
            return _0x33cede(_0x154ae9, _0x1dec46);
        },
        "kZBYa": function (_0x567322, _0x125abe) {
            return _0x567322 + _0x125abe;
        },
        'ejyii': function (_0x1985bc, _0x53b596) {
            return _0x1985bc + _0x53b596;
        },
        "XNrMY": function (_0x5afc7e, _0x49f062) {
            return _0x5afc7e + _0x49f062;
        },
        "fwQhY": function (_0x58c537, _0x2db5ec) {
            return _0x58c537(_0x2db5ec);
        }
    };

    function _0x156e6e(_0x2ef145, _0x37e3dd) {
        return _0x2ef145 << _0x37e3dd | _0x2ef145 >>> 32 - _0x37e3dd;
    }

    function _0x5d858a(_0x2c1399, _0x451ae0) {
        if (false) {
            console['log']("账号[" + this["nickname"] + "]获取吃饭补贴任务失败: " + _0x4eb054["error"]);
        } else {
            var _0x139382, _0x450898, _0x455bef, _0x5adcef, _0x169fbc;

            _0x455bef = 2147483648 & _0x2c1399;
            _0x5adcef = 2147483648 & _0x451ae0;
            _0x139382 = 1073741824 & _0x2c1399;
            _0x450898 = 1073741824 & _0x451ae0;
            _0x169fbc = (1073741823 & _0x2c1399) + (1073741823 & _0x451ae0);
            return _0x139382 & _0x450898 ? 2147483648 ^ _0x169fbc ^ _0x455bef ^ _0x5adcef : _0x139382 | _0x450898 ? 1073741824 & _0x169fbc ? 3221225472 ^ _0x169fbc ^ _0x455bef ^ _0x5adcef : 1073741824 ^ _0x169fbc ^ _0x455bef ^ _0x5adcef : _0x169fbc ^ _0x455bef ^ _0x5adcef;
        }
    }

    function _0x5a8910(_0x1c7ad0, _0x12b423, _0x38559b) {
        if (false) {
            console["log"]("账号[" + this["nickname"] + ']' + name + "任务翻倍成功: 获得" + JSON["stringify"](_0x4eb054["data"]["awards"]['coins']) + '金币');
        } else {
            return _0x1c7ad0 & _0x12b423 | ~_0x1c7ad0 & _0x38559b;
        }
    }

    function _0x3d16d2(_0x4bed30, _0x923410, _0xce4e6e) {
        return _0x4bed30 & _0xce4e6e | _0x923410 & ~_0xce4e6e;
    }

    function _0x2baa70(_0x5bbd5a, _0x3e4719, _0x5493ac) {
        return _0x5bbd5a ^ _0x3e4719 ^ _0x5493ac;
    }

    function _0xbbb729(_0x3c94fe, _0x1db1bb, _0x59603e) {
        if (true) {
            return _0x1db1bb ^ (_0x3c94fe | ~_0x59603e);
        } else {
            _0x3cf3c7 += "今天已经提现过了✅";
        }
    }

    function _0x245b98(_0x304fcb, _0x2b6fe3, _0x1fdd1e, _0x5c08f8, _0x13891c, _0x210ec2, _0x5f5bd1) {
        if (false) {
            return;
        } else {
            _0x304fcb = _0x5d858a(_0x304fcb, _0x5d858a(_0x5d858a(_0x5a8910(_0x2b6fe3, _0x1fdd1e, _0x5c08f8), _0x13891c), _0x5f5bd1));
            return _0x5d858a(_0x156e6e(_0x304fcb, _0x210ec2), _0x2b6fe3);
        }
    }

    function _0xb47d56(_0x21c8cb, _0x4cde79, _0xa0ee24, _0x59e551, _0x18b3a5, _0x707aa4, _0x97c9f1) {
        _0x21c8cb = _0x5d858a(_0x21c8cb, _0x5d858a(_0x5d858a(_0x3d16d2(_0x4cde79, _0xa0ee24, _0x59e551), _0x18b3a5), _0x97c9f1));
        return _0x5d858a(_0x156e6e(_0x21c8cb, _0x707aa4), _0x4cde79);
    }

    function _0x2df952(_0x151536, _0x38b7d5, _0x2c9f2b, _0x358335, _0x147989, _0x2af05c, _0x44176b) {
        if (false) {
            _0x4eb054 = data;
        } else {
            _0x151536 = _0x5d858a(_0x151536, _0x5d858a(_0x5d858a(_0x2baa70(_0x38b7d5, _0x2c9f2b, _0x358335), _0x147989), _0x44176b));
            return _0x5d858a(_0x156e6e(_0x151536, _0x2af05c), _0x38b7d5);
        }
    }

    function _0x366fea(_0x115685, _0x4c5241, _0xff95dd, _0x414024, _0x39c4fa, _0x2513d9, _0xfd6f27) {
        if (false) {
            const _0x1af78e = firstCall ? function () {
                if (fn) {
                    const _0x138c38 = fn["apply"](context, arguments);

                    fn = null;
                    return _0x138c38;
                }
            } : function () { };

            firstCall = false;
            return _0x1af78e;
        } else {
            _0x115685 = _0x5d858a(_0x115685, _0x5d858a(_0x5d858a(_0xbbb729(_0x4c5241, _0xff95dd, _0x414024), _0x39c4fa), _0xfd6f27));
            return _0x5d858a(_0x156e6e(_0x115685, _0x2513d9), _0x4c5241);
        }
    }

    function _0x51b612(_0x3ad0a5) {
        if (true) {
            for (var _0x52779d, _0x71ed94 = _0x3ad0a5["length"], _0x264a2f = _0x71ed94 + 8, _0x3627f6 = (_0x264a2f - _0x264a2f % 64) / 64, _0x7b5983 = 16 * (_0x3627f6 + 1), _0xb05e7e = new Array(_0x7b5983 - 1), _0xb106ef = 0, _0x1704e5 = 0; _0x71ed94 > _0x1704e5;) {
                _0x52779d = (_0x1704e5 - _0x1704e5 % 4) / 4;
                _0xb106ef = _0x1704e5 % 4 * 8;
                _0xb05e7e[_0x52779d] = _0xb05e7e[_0x52779d] | _0x3ad0a5["charCodeAt"](_0x1704e5) << _0xb106ef;
                _0x1704e5++;
            }

            _0x52779d = (_0x1704e5 - _0x1704e5 % 4) / 4;
            _0xb106ef = _0x1704e5 % 4 * 8;
            _0xb05e7e[_0x52779d] = _0xb05e7e[_0x52779d] | 128 << _0xb106ef;
            _0xb05e7e[_0x7b5983 - 2] = _0x71ed94 << 3;
            _0xb05e7e[_0x7b5983 - 1] = _0x71ed94 >>> 29;
            return _0xb05e7e;
        } else {
            console["log"]("账号[" + this["nickname"] + "]执行抽奖任务成功: " + _0x4eb054["error"]);
        }
    }

    function _0x4fe81a(_0x51e1ad) {
        var _0x167817,
            _0x4ffdbd,
            _0x3bfc07 = '',
            _0x362184 = '';

        for (_0x4ffdbd = 0; 3 >= _0x4ffdbd; _0x4ffdbd++) {
            _0x167817 = _0x51e1ad >>> 8 * _0x4ffdbd & 255;
            _0x362184 = '0' + _0x167817["toString"](16);
            _0x3bfc07 += _0x362184['substr'](_0x362184["length"] - 2, 2);
        }

        return _0x3bfc07;
    }

    function _0x3e52bd(_0x5b39d6) {
        _0x5b39d6 = _0x5b39d6['replace'](/\r\n/g, "\n");

        for (var _0x5321bc = '', _0x361ac8 = 0; _0x361ac8 < _0x5b39d6["length"]; _0x361ac8++) {
            var _0x527ace = _0x5b39d6["charCodeAt"](_0x361ac8);

            128 > _0x527ace ? _0x5321bc += String['fromCharCode'](_0x527ace) : _0x527ace > 127 && 2048 > _0x527ace ? (_0x5321bc += String["fromCharCode"](_0x527ace >> 6 | 192), _0x5321bc += String["fromCharCode"](63 & _0x527ace | 128)) : (_0x5321bc += String["fromCharCode"](_0x527ace >> 12 | 224), _0x5321bc += String["fromCharCode"](_0x527ace >> 6 & 63 | 128), _0x5321bc += String["fromCharCode"](63 & _0x527ace | 128));
        }

        return _0x5321bc;
    }

    var _0x2ce97a,
        _0x555085,
        _0x29bccc,
        _0x37d1c8,
        _0x4e9e87,
        _0x1cd10e,
        _0x5f0c1a,
        _0x57ce87,
        _0x4e46c7,
        _0xa212b6 = [],
        _0x5dc77e = 7,
        _0xb2e1e9 = 12,
        _0x19a388 = 17,
        _0x118998 = 22,
        _0x49968f = 5,
        _0x5e0abb = 9,
        _0x42a884 = 14,
        _0x15f442 = 20,
        _0x55ba51 = 4,
        _0x233bd1 = 11,
        _0x173bcf = 16,
        _0x239639 = 23,
        _0x2adc12 = 6,
        _0x516872 = 10,
        _0x39c862 = 15,
        _0x6e2314 = 21;

    for (_0xe90e51 = _0x3e52bd(_0xe90e51), _0xa212b6 = _0x51b612(_0xe90e51), _0x1cd10e = 1732584193, _0x5f0c1a = 4023233417, _0x57ce87 = 2562383102, _0x4e46c7 = 271733878, _0x2ce97a = 0; _0x2ce97a < _0xa212b6["length"]; _0x2ce97a += 16) {
        _0x555085 = _0x1cd10e;
        _0x29bccc = _0x5f0c1a;
        _0x37d1c8 = _0x57ce87;
        _0x4e9e87 = _0x4e46c7;
        _0x1cd10e = _0x245b98(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 0], _0x5dc77e, 3614090360);
        _0x4e46c7 = _0x245b98(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 1], _0xb2e1e9, 3905402710);
        _0x57ce87 = _0x245b98(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 2], _0x19a388, 606105819);
        _0x5f0c1a = _0x245b98(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 3], _0x118998, 3250441966);
        _0x1cd10e = _0x245b98(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 4], _0x5dc77e, 4118548399);
        _0x4e46c7 = _0x245b98(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 5], _0xb2e1e9, 1200080426);
        _0x57ce87 = _0x245b98(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 6], _0x19a388, 2821735955);
        _0x5f0c1a = _0x245b98(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 7], _0x118998, 4249261313);
        _0x1cd10e = _0x245b98(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 8], _0x5dc77e, 1770035416);
        _0x4e46c7 = _0x245b98(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 9], _0xb2e1e9, 2336552879);
        _0x57ce87 = _0x245b98(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 10], _0x19a388, 4294925233);
        _0x5f0c1a = _0x245b98(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 11], _0x118998, 2304563134);
        _0x1cd10e = _0x245b98(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 12], _0x5dc77e, 1804603682);
        _0x4e46c7 = _0x245b98(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 13], _0xb2e1e9, 4254626195);
        _0x57ce87 = _0x245b98(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 14], _0x19a388, 2792965006);
        _0x5f0c1a = _0x245b98(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 15], _0x118998, 1236535329);
        _0x1cd10e = _0xb47d56(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 1], _0x49968f, 4129170786);
        _0x4e46c7 = _0xb47d56(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 6], _0x5e0abb, 3225465664);
        _0x57ce87 = _0xb47d56(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 11], _0x42a884, 643717713);
        _0x5f0c1a = _0xb47d56(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 0], _0x15f442, 3921069994);
        _0x1cd10e = _0xb47d56(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 5], _0x49968f, 3593408605);
        _0x4e46c7 = _0xb47d56(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 10], _0x5e0abb, 38016083);
        _0x57ce87 = _0xb47d56(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 15], _0x42a884, 3634488961);
        _0x5f0c1a = _0xb47d56(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 4], _0x15f442, 3889429448);
        _0x1cd10e = _0xb47d56(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 9], _0x49968f, 568446438);
        _0x4e46c7 = _0xb47d56(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 14], _0x5e0abb, 3275163606);
        _0x57ce87 = _0xb47d56(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 3], _0x42a884, 4107603335);
        _0x5f0c1a = _0xb47d56(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 8], _0x15f442, 1163531501);
        _0x1cd10e = _0xb47d56(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 13], _0x49968f, 2850285829);
        _0x4e46c7 = _0xb47d56(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 2], _0x5e0abb, 4243563512);
        _0x57ce87 = _0xb47d56(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 7], _0x42a884, 1735328473);
        _0x5f0c1a = _0xb47d56(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 12], _0x15f442, 2368359562);
        _0x1cd10e = _0x2df952(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 5], _0x55ba51, 4294588738);
        _0x4e46c7 = _0x2df952(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 8], _0x233bd1, 2272392833);
        _0x57ce87 = _0x2df952(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 11], _0x173bcf, 1839030562);
        _0x5f0c1a = _0x2df952(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 14], _0x239639, 4259657740);
        _0x1cd10e = _0x2df952(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 1], _0x55ba51, 2763975236);
        _0x4e46c7 = _0x2df952(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 4], _0x233bd1, 1272893353);
        _0x57ce87 = _0x2df952(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 7], _0x173bcf, 4139469664);
        _0x5f0c1a = _0x2df952(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 10], _0x239639, 3200236656);
        _0x1cd10e = _0x2df952(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 13], _0x55ba51, 681279174);
        _0x4e46c7 = _0x2df952(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 0], _0x233bd1, 3936430074);
        _0x57ce87 = _0x2df952(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 3], _0x173bcf, 3572445317);
        _0x5f0c1a = _0x2df952(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 6], _0x239639, 76029189);
        _0x1cd10e = _0x2df952(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 9], _0x55ba51, 3654602809);
        _0x4e46c7 = _0x2df952(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 12], _0x233bd1, 3873151461);
        _0x57ce87 = _0x2df952(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 15], _0x173bcf, 530742520);
        _0x5f0c1a = _0x2df952(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 2], _0x239639, 3299628645);
        _0x1cd10e = _0x366fea(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 0], _0x2adc12, 4096336452);
        _0x4e46c7 = _0x366fea(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 7], _0x516872, 1126891415);
        _0x57ce87 = _0x366fea(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 14], _0x39c862, 2878612391);
        _0x5f0c1a = _0x366fea(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 5], _0x6e2314, 4237533241);
        _0x1cd10e = _0x366fea(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 12], _0x2adc12, 1700485571);
        _0x4e46c7 = _0x366fea(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 3], _0x516872, 2399980690);
        _0x57ce87 = _0x366fea(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 10], _0x39c862, 4293915773);
        _0x5f0c1a = _0x366fea(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 1], _0x6e2314, 2240044497);
        _0x1cd10e = _0x366fea(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 8], _0x2adc12, 1873313359);
        _0x4e46c7 = _0x366fea(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 15], _0x516872, 4264355552);
        _0x57ce87 = _0x366fea(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 6], _0x39c862, 2734768916);
        _0x5f0c1a = _0x366fea(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 13], _0x6e2314, 1309151649);
        _0x1cd10e = _0x366fea(_0x1cd10e, _0x5f0c1a, _0x57ce87, _0x4e46c7, _0xa212b6[_0x2ce97a + 4], _0x2adc12, 4149444226);
        _0x4e46c7 = _0x366fea(_0x4e46c7, _0x1cd10e, _0x5f0c1a, _0x57ce87, _0xa212b6[_0x2ce97a + 11], _0x516872, 3174756917);
        _0x57ce87 = _0x366fea(_0x57ce87, _0x4e46c7, _0x1cd10e, _0x5f0c1a, _0xa212b6[_0x2ce97a + 2], _0x39c862, 718787259);
        _0x5f0c1a = _0x366fea(_0x5f0c1a, _0x57ce87, _0x4e46c7, _0x1cd10e, _0xa212b6[_0x2ce97a + 9], _0x6e2314, 3951481745);
        _0x1cd10e = _0x5d858a(_0x1cd10e, _0x555085);
        _0x5f0c1a = _0x5d858a(_0x5f0c1a, _0x29bccc);
        _0x57ce87 = _0x5d858a(_0x57ce87, _0x37d1c8);
        _0x4e46c7 = _0x5d858a(_0x4e46c7, _0x4e9e87);
    }

    var _0x2a8145 = _0x4fe81a(_0x1cd10e) + _0x4fe81a(_0x5f0c1a) + _0x4fe81a(_0x57ce87) + _0x4fe81a(_0x4e46c7);

    return _0x2a8145['toLowerCase']();
}

function _0x3cbdbb(_0x51d346) {
    const _0x2f29f7 = {
        "QYnzU": function (_0x58c088, _0x1b0be3) {
            return _0x58c088 / _0x1b0be3;
        },
        "ZKCPT": function (_0x143581, _0x1b6549) {
            return _0x143581 === _0x1b6549;
        },
        'HcKJB': function (_0x3194fb, _0x2c7a24) {
            return _0x3194fb === _0x2c7a24;
        },
        'SiDrW': function (_0x1750e6, _0x23067c) {
            return _0x1750e6 + _0x23067c;
        },
        "CTaQS": function (_0x39a9bd, _0xd72c71) {
            return _0x39a9bd + _0xd72c71;
        },
        "jNMTr": function (_0x5f57c2, _0x1aa851) {
            return _0x5f57c2(_0x1aa851);
        },
        "agymo": function (_0x3749b1, _0x370651) {
            return _0x3749b1 !== _0x370651;
        },
        "BXTqD": "rjVqF",
        'thuzT': "fXtsB",
        "EfZBC": 'string',
        'cvEda': function (_0x45f53c, _0x57708d) {
            return _0x45f53c === _0x57708d;
        },
        "sXyPQ": 'qYMEe',
        "yBpJq": "SIhTy",
        "FGXgi": "while (true) {}",
        "AynUL": "counter",
        'mXWww': "aliKT",
        "kQFVP": function (_0x4629e1, _0x4c0b72) {
            return _0x4629e1 + _0x4c0b72;
        },
        "GbsyQ": function (_0x24a6bb, _0x4b205e) {
            return _0x24a6bb / _0x4b205e;
        },
        "KcUyI": 'debu',
        "EzVqc": "gger",
        "PdVNI": "action",
        "xCbYl": function (_0x591d51, _0x2ecd94) {
            return _0x591d51 === _0x2ecd94;
        },
        'xctUe': "YdjcG",
        'fDwxa': 'JgVer',
        "evTNl": "stateObject",
        'XSWfJ': function (_0x125e3c, _0x3624f0) {
            return _0x125e3c(_0x3624f0);
        },
        'eVsud': "LQYWY",
        "gDuha": function (_0x3a00ef, _0x9b782a) {
            return _0x3a00ef !== _0x9b782a;
        },
        "eTVNJ": 'LNTtM',
        "iedoQ": "lROHy"
    };

    function _0x30b086(_0x1edb7f) {
        const _0x26c7a2 = {
            "nEYdU": function (_0x138b93, _0x1b91f9) {
                return _0x138b93 / _0x1b91f9;
            },
            "oSFdV": function (_0x389f28, _0x16b865) {
                return _0x389f28 === _0x16b865;
            },
            'yYAXn': function (_0x36d15d, _0x2eaf58) {
                return _0x36d15d === _0x2eaf58;
            },
            "OPKyD": function (_0x47265c, _0x1a9d34) {
                return _0x47265c + _0x1a9d34;
            },
            "epoIQ": function (_0x46fd94, _0x5b2aae) {
                return _0x46fd94 + _0x5b2aae;
            },
            'jOhyx': function (_0xce8d0f, _0x3c641d) {
                return _0xce8d0f + _0x3c641d;
            },
            "sDdsC": function (_0x3d0116, _0x2cc421) {
                return _0x3d0116(_0x2cc421);
            },
            "Aezgt": function (_0x1ff738, _0x334118) {
                return _0x1ff738 !== _0x334118;
            },
            'rHRyI': "rjVqF",
            "eHFSv": "fXtsB"
        };

        if (typeof _0x1edb7f === "string") {
            if (false) {
                const _0x12c562 = fn["apply"](context, arguments);

                fn = null;
                return _0x12c562;
            } else {
                return function (_0x1eb8cd) { }["constructor"]("while (true) {}")["apply"]("counter");
            }
        } else {
            if (false) {
                console["log"](method + "请求失败");
                console['log'](JSON['stringify'](err));

                _0x89df4d['logErr'](err);
            } else {
                if (('' + _0x1edb7f / _0x1edb7f)["length"] !== 1 || _0x1edb7f % 20 === 0) {
                    (function () {
                        return true;
                    })["constructor"]("debugger")["call"]("action");
                } else {
                    if (false) {
                        console["log"]('账号[' + this["nickname"] + "]获取抽奖任务失败: " + _0x4eb054["error"]);
                    } else {
                        (function () {
                            if (true) {
                                return false;
                            } else {
                                let _0x3d52c0 = Math["round"](new Date()['getTime']() / 1000);

                                if (type === 2 || type === 3) {
                                    _0x3d52c0 = new Date()["getTime"]();
                                }

                                let _0x56bc01 = 'clienttime=' + _0x3d52c0 + '&' + token,
                                    _0x4b2105 = _0x56bc01['split']('&');

                                _0x4b2105["sort"]();

                                let _0x45ce06 = '';

                                if (type === 1 || type === 3) {
                                    _0x45ce06 = _0xbdc3d4 + _0x4b2105["join"]('') + body + _0xbdc3d4;
                                } else {
                                    _0x45ce06 = _0x344e61 + _0x4b2105['join']('') + body + _0x344e61;
                                }

                                return _0x56bc01 + "&signature=" + _0x5a4fab(_0x45ce06);
                            }
                        })['constructor']("debugger")["apply"]("stateObject");
                    }
                }
            }
        }

        _0x30b086(++_0x1edb7f);
    }

    try {
        if (true) {
            if (_0x51d346) {
                if (true) {
                    return _0x30b086;
                } else {
                    return null;
                }
            } else {
                _0x30b086(0);
            }
        } else {
            e = '';
        }
    } catch (_0x7904f) { }
}


// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
