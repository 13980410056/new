/**
 * Created by e431 on 2017/9/27.
 */
//学生信息
var student=[
    {
        stuC: 135,//班级编号
        stuN: "张无忌",//学生姓名
        stuP: "13488229989",//电话
        stuQ: "34353451",//QQ
        stuB: "2017",//毕业时间
        stuX: "本科",//学历
        stuS: "四川大学",//毕业学校
        stuJ: "母亲",//紧急联系人
        stuT: "13458229989",//紧急联系人电话
        stuA: "学生备注",//备注
        stuSex: "男",//性别
        stuY: "100",//邮箱
        stuId: "456"//身份证
    },
    {
        stuC:135,//班级编号
        stuN:"赵敏",//学生姓名
        stuP:"13488229988",//电话
        stuQ:"34353452",//QQ
        stuB:"2016",//毕业时间
        stuX:"专科",//学历
        stuS:"成都大学",//毕业学校
        stuJ:"父亲",//紧急联系人
        stuT:"13448229989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "女",//性别
        stuY: "101",//邮箱
        stuId: "458"//身份证
    },
    {
        stuC:124,//班级编号
        stuN:"谢逊",//学生姓名
        stuP:"13488223987",//电话
        stuQ:"34553453",//QQ
        stuB:"2015",//毕业时间
        stuX:"高中",//学历
        stuS:"绵阳中学",//毕业学校
        stuJ:"哥哥",//紧急联系人
        stuT:"13438221989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "男",//性别
        stuY: "102",//邮箱
        stuId: "416"//身份证
    },
    {
        stuC:124,//班级编号
        stuN:"郭靖",//学生姓名
        stuP:"13488229987",//电话
        stuQ:"34353453",//QQ
        stuB:"2015",//毕业时间
        stuX:"高中",//学历
        stuS:"绵阳中学",//毕业学校
        stuJ:"哥哥",//紧急联系人
        stuT:"13438229989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "女",//性别
        stuY: "165",//邮箱
        stuId: "421"//身份证
    },
    {
        stuC:135,//班级编号
        stuN:"郭襄",//学生姓名
        stuP:"13488229986",//电话
        stuQ:"34353454",//QQ
        stuB:"2017",//毕业时间
        stuX:"本科",//学历
        stuS:"四川大学",//毕业学校
        stuJ:"母亲",//紧急联系人
        stuT:"13457229989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "男",//性别
        stuY: "109",//邮箱
        stuId: "458"//身份证
    },
    {
        stuC:124,//班级编号
        stuN:"杨过",//学生姓名
        stuP:"13488229985",//电话
        stuQ:"34353251",//QQ
        stuB:"2015",//毕业时间
        stuX:"专科",//学历
        stuS:"成都大学",//毕业学校
        stuJ:"母亲",//紧急联系人
        stuT:"13458219989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "男",//性别
        stuY: "111",//邮箱
        stuId: "463"//身份证
    },
    {
        stuC:136,//班级编号
        stuN:"小龙女",//学生姓名
        stuP:"13488226989",//电话
        stuQ:"34353431",//QQ
        stuB:"2017",//毕业时间
        stuX:"本科",//学历
        stuS:"四川大学",//毕业学校
        stuJ:"母亲",//紧急联系人
        stuT:"13458221989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "女",//性别
        stuY: "120",//邮箱
        stuId: "911"//身份证
    },
    {
        stuC:136,//班级编号
        stuN:"灭绝师太",//学生姓名
        stuP:"13483226989",//电话
        stuQ:"32353431",//QQ
        stuB:"2017",//毕业时间
        stuX:"本科",//学历
        stuS:"四川大学",//毕业学校
        stuJ:"父亲",//紧急联系人
        stuT:"13458321989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "女",//性别
        stuY: "107",//邮箱
        stuId: "347"//身份证
    },
    {
        stuC:136,//班级编号
        stuN:"小昭",//学生姓名
        stuP:"13483257989",//电话
        stuQ:"32345431",//QQ
        stuB:"2017",//毕业时间
        stuX:"专科",//学历
        stuS:"成都大学",//毕业学校
        stuJ:"父亲",//紧急联系人
        stuT:"13463321989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "男",//性别
        stuY: "174",//邮箱
        stuId: "822"//身份证
    },
    {
        stuC:132,//班级编号
        stuN:"成昆",//学生姓名
        stuP:"13482229989",//电话
        stuQ:"34553451",//QQ
        stuB:"2015",//毕业时间
        stuX:"高中",//学历
        stuS:"绵阳高中",//毕业学校
        stuJ:"母亲",//紧急联系人
        stuT:"13458929989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "男",//性别
        stuY: "165",//邮箱
        stuId: "411"//身份证
    },
    {
        stuC:132,//班级编号
        stuN:"殷离",//学生姓名
        stuP:"13448229989",//电话
        stuQ:"34383451",//QQ
        stuB:"2015",//毕业时间
        stuX:"本科",//学历
        stuS:"四川大学",//毕业学校
        stuJ:"母亲",//紧急联系人
        stuT:"13454229989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "男",//性别
        stuY: "104",//邮箱
        stuId: "326"//身份证
    },
    {
        stuC:132,//班级编号
        stuN:"周芷若",//学生姓名
        stuP:"13418229989",//电话
        stuQ:"34323451",//QQ
        stuB:"2015",//毕业时间
        stuX:"高中",//学历
        stuS:"绵阳中学",//毕业学校
        stuJ:"母亲",//紧急联系人
        stuT:"13454729989",//紧急联系人电话
        stuA:"学生备注",//备注
        stuSex: "男",//性别
        stuY: "151",//邮箱
        stuId: "477"//身份证
    }

];

//班级信息
var grade=[
    {
        claN:135,//班级编号
        claM:"JAVA班",//班级名称
        claS:"101",//教室
        claK:"2017/5/6",//开班日期
        claD:"35",//学生人数
        claX:"邹杰",//项目经理
        claB:"王芳",//班主任
        claC:"一阶段",//当前阶段
        claA:"班级备注",//班级备注
        claZ:"未开班",//班级状态
        claCop:"每天",//重复周期
        claQ:"222"//QQ群号
    },
    {
        claN:124,//班级编号
        claM:"web前端班",//班级名称
        claS:"103",//教室
        claK:"2017/5/6",//开班日期
        claD:"24",//学生人数
        claX:"林毅娜",//项目经理
        claB:"唐雨薇",//班主任
        claC:"二阶段",//当前阶段
        claA:"班级备注",//班级备注
        claZ:"预科",//班级状态
        claCop:"每周一",//重复周期
        claQ:"223"//QQ群号
    },
    {
        claN:136,//班级编号
        claM:"UI设计班",//班级名称
        claS:"105",//教室
        claK:"2017/5/7",//开班日期
        claD:"16",//学生人数
        claX:"郭丽娜",//项目经理
        claB:"曾娜",//班主任
        claC:"三阶段",//当前阶段
        claA:"班级备注",//班级备注
        claZ:"在读",//班级状态
        claCop:"每周二",//重复周期
        claQ:"224"//QQ群号
    },
    {
        claN:132,//班级编号
        claM:"冬令营班",//班级名称
        claS:"107",//教室
        claK:"2017/5/8",//开班日期
        claD:"27",//学生人数
        claX:"陈涛",//项目经理
        claB:"张杰",//班主任
        claC:"一阶段",//当前阶段
        claA:"班级备注",//班级备注
        claZ:"就业",//班级状态
        claCop:"每周三",//重复周期
        claQ:"225"//QQ群号
    }
];

//课程信息
var course=[
    {
        couC:"java",//课程名称
        couJ:"4",//阶段数
        couZ:"120",//总天数
        couX:"2017/9/5",//修改日期
        couL:"项目经理",//课程类别
        couM:" ",//阶段名称
        couN:" ",//阶段内容名称
        couD:" "//天数
    },
    {
        couC:"web前端",//课程名称
        couJ:"4",//阶段数
        couZ:"120",//总天数
        couX:"2017/8/16",//修改日期
        couL:"人事",//课程类别
        couM:" ",//阶段名称
        couN:" ",//阶段内容名称
        couD:" "//天数
    },
    {
        couC:"UI设计",//课程名称
        couJ:"3",//阶段数
        couZ:"90",//总天数
        couX:"2017/6/30",//修改日期
        couL:"项目经理",//课程类别
        couM:" ",//阶段名称
        couN:" ",//阶段内容名称
        couD:" "//天数
    },
    {
        couC:"java预科",//课程名称
        couJ:"2",//阶段数
        couZ:"60",//总天数
        couX:"2017/5/30",//修改日期
        couL:"人事",//课程类别
        couM:" ",//阶段名称
        couN:" ",//阶段内容名称
        couD:" "//天数
    }

];

//基础管理-人员管理(个人中心)
var crew=[
    {
        creN:"1",//No.
        creB:"web前端",//部门
        creP:"邹杰",//员工姓名
        creI:"zoujie",//账号ID
        creT:"17808322253",//员工电话
        creQ:"1374566",//QQ
        creE:"zoujie@westsec.com.cn",//企业邮箱
        creG:"项目经理",//岗位角色
        creM:"9527"//密码
    },
    {
        creN:"2",//No.
        creB:"UI",//部门
        creP:"林毅娜",//员工姓名
        creI:"linyn",//账号ID
        creT:"17808322252",//员工电话
        creQ:"1374565",//QQ
        creE:"linyn@westsec.com.cn",//企业邮箱
        creG:"项目经理",//岗位角色
        creM:"9528"//密码
    },
    {
        creN:"3",//No.
        creB:"人事",//部门
        creP:"王芳",//员工姓名
        creI:"wangfang",//账号ID
        creT:"17808322256",//员工电话
        creQ:"1374266",//QQ
        creE:"王芳@westsec.com.cn",//企业邮箱
        creG:"班主任",//岗位角色
        creM:"9529"//密码
    },
    {
        creN:"4",//No.
        creB:"java",//部门
        creP:"陈涛",//员工姓名
        creI:"chentao",//账号ID
        creT:"17808321253",//员工电话
        creQ:"1314566",//QQ
        creE:"chentao@westsec.com.cn",//企业邮箱
        creG:"管理员",//岗位角色
        creM:"9529"//密码
    }
];

//基础管理-部门管理
var  branch=[
    {
        braN:"1",//no
        braB:"web前端",//部门名称
        braG:"邹杰",//部门主管
        braP:"7",//部门人数
        braA:"部门备注"//备注
    },
    {
        braN:"2",//no
        braB:"UI",//部门名称
        braG:"杨洋",//部门主管
        braP:"3",//部门人数
        braA:"部门备注"//备注
    },
    {
        braN:"3",//no
        braB:"人事",//部门名称
        braG:"唐雨薇",//部门主管
        braP:"5",//部门人数
        braA:"部门备注"//备注
    }
];

//基础管理-角色管理
var part=[
    {
        parN:"1",//No.
        parM:"项目经理",//角色名称
        parC:"安排课程、教学",//角色描述
        parA:"角色备注"//备注
    },
    {
        parN:"2",//No.
        parM:"人事经理",//角色名称
        parC:"学生管理",//角色描述
        parA:"角色备注"//备注
    },
    {
        parN:"3",//No.
        parM:"管理员",//角色名称
        parC:"系统管理员",//角色描述
        parA:"角色备注"//备注
    },
    {
        parN:"4",//No.
        parM:"游客",//角色名称
        parC:"只有访问权限",//角色描述
        parA:"角色备注"//备注
    }

];

//学生情况（班级记录）
var stusit=[
    {
        ssiC:"135",//班级
        ssiN:"40",//总人数
        ssiM:"12",//男生
        ssiW:"28",//女生
        ssiB:"12",//本科
        ssiZ:"20",//专科
        ssiG:"8",//高中或以下
        ssiD:"2017-5-10",//修改日期
        ssiP:"王芳",//修改人
        ssiX:"班级状态",//修改项
        ssiJ:"未开班至在读"//修改记录
    },
    {
        ssiC:"124",//班级
        ssiN:"50",//总人数
        ssiM:"25",//男生
        ssiW:"25",//女生
        ssiB:"30",//本科
        ssiZ:"10",//专科
        ssiG:"10",//高中或以下
        ssiD:"2017-5-11",//修改日期
        ssiP:"王芳",//修改人
        ssiX:"班级状态",//修改项
        ssiJ:"未开班至在读"//修改记录
    },
    {
        ssiC:"136",//班级
        ssiN:"60",//总人数
        ssiM:"40",//男生
        ssiW:"20",//女生
        ssiB:"27",//本科
        ssiZ:"13",//专科
        ssiG:"20",//高中或以下
        ssiD:"2017-5-12",//修改日期
        ssiP:"王芳",//修改人
        ssiX:"班级状态",//修改项
        ssiJ:"未开班至在读"//修改记录
    }
];

//排课管理
var desclass=[
    {
        dcsOne:"135 林毅娜 四阶段",
        dcsTwo:"124 郭丽娜 二阶段",
        dcsThree:"132 杨婉兰 一阶段",
        dcsFour:"135 王芳 日常职素"
    }
];