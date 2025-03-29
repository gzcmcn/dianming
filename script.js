// 学生名单
let students = [
    "苏香", "任峙存", "王金浩", "李诗琪", "刘冠廷", "张珈铷", "李雨霏", "王子涵（胖)", "王姝锦", "谷立盈", "孙会翔", "包芮菁", "尹宇航", "曹子曦", "李兴国", "李梓桃", "廖以羡", "何佳伊", "杨昊锟", "薛佳淇", "衣芷墨", "王子全", "孟庆航", "王子涵（瘦)", "刘姿妤", "刘雨杭", "江雨桐", "卢宣宇", "杨舒琳", "曹夏千雨", "张瀚文", "杨童兮", "常峰睿", "周柏铮", "梁程威", "陶珺铭", "张航睿", "武心月", "贾睿琪", "郝悦洋", "高宇博", "侯婷婷", "王祉衡", "王嘉麟", "孙雨馨", "单德惠", "酸嘟7", "王嘉麟", "王嘉麟", "王嘉麟", "王嘉麟", "王嘉麟", "王嘉麟"
];

// 获取按钮和结果显示元素
const pickButton = document.getElementById('pick-button');
const resetButton = document.getElementById('reset-button');
const studentName = document.getElementById('student-name');
const remainingStudents = document.getElementById('remaining-students');

// 更新剩余学生数量
function updateRemainingStudents() {
    remainingStudents.textContent = students.length;
}

// 点击按钮时触发随机点名
pickButton.addEventListener('click', () => {
    if (students.length === 0) {
        studentName.textContent = "没有学生可点名！";
        return;
    }

    // 随机选择一个学生
    const randomIndex = Math.floor(Math.random() * students.length);
    const pickedStudent = students[randomIndex];

    // 显示被点名的学生
    studentName.textContent = pickedStudent;

    // 从名单中移除已被点名的学生
    students.splice(randomIndex, 1);

    // 更新剩余学生数量
    updateRemainingStudents();
});

// 点击重置按钮时恢复学生名单
resetButton.addEventListener('click', () => {
    students = [
         "苏香", "任峙存", "王金浩", "李诗琪", "刘冠廷", "张珈铷", "李雨霏", "王子涵（胖)", "王姝锦", "谷立盈", "孙会翔", "包芮菁", "尹宇航", "曹子曦", "李兴国", "李梓桃", "廖以羡", "何佳伊", "杨昊锟", "薛佳淇", "衣芷墨", "王子全", "孟庆航", "王子涵（瘦)", "刘姿妤", "刘雨杭", "江雨桐", "卢宣宇", "杨舒琳", "曹夏千雨", "张瀚文", "杨童兮", "常峰睿", "周柏铮", "梁程威", "陶珺铭", "张航睿", "武心月", "贾睿琪", "郝悦洋", "高宇博", "侯婷婷", "王祉衡", "王嘉麟", "孙雨馨", "单德惠", "酸嘟7", "王嘉麟", "王嘉麟", "王嘉麟", "王嘉麟", "王嘉麟", "王嘉麟"
 ];
    studentName.textContent = "无";
    updateRemainingStudents();
});

// 初始化剩余学生数量
updateRemainingStudents();
