// 切换功能 左三部分
$(function () {
    $('.div3 li').click(function () {
        // 点击 当前修改名字，其他清空
        $(this).addClass('active').siblings().removeClass('active');
        // 获取下标
        var ind =$(this).index();
        $('.body-right li').eq(ind).removeClass('hide').addClass('show');
        $('.body-right li').eq(ind).siblings().removeClass('show').addClass('hide')
    })
})