window.onload = function(){
    document.getElementById("calculate").onclick = function(){
        main();
    };
};

function main()
{
    let sum = cal1()+cal2()+cal3()+cal4()+cal5();
    let res = document.getElementById("name").value + "本次测验得分为" + sum.toString();
    alert(res);
}

function cal1()
{
    let sum1 = 0;
    if(document.getElementById("1.1").value == "统一建模语言")
    {
      sum1 += 5;
    }
    if(document.getElementById("1.2.1").value == "封装性")
    {
      sum1 += 5;
    }
    if(document.getElementById("1.2.2".value == "继承性"))
    {
      sum1 += 5;
    }
    if(document.getElementById("1.2.3").value == "多态性")
    {
      sum1 += 5;
    }
    return sum1;
}

function cal2()
{
    let sum2 = 0;
    if(document.getElementById("2.1").checked)
      {
        sum2 += 10;
      }
      if(document.getElementById("2.2").checked)
      {
        sum2 += 10;
      }
      return sum2;
}

function cal3()
{
    let sum3 = 0;
    if(document.getElementById("3.1").checked === true && document.getElementById("3.1.0") === false)
    {
      sum3 += 10;
    }
    if(document.getElementById("3.2").checked === true && document.getElementById("3.2.0") === false)
    {
      sum3 += 10;
    }
    return sum3;
}

function cal4()
{
    let sum4 = 0;
    if(document.getElementById("4.1").checked)
    {
      sum4 += 10;
    }
    if(document.getElementById("4.2").checked)
    {
      sum4 += 10;
    }
    return sum4;
}

function cal5()
{
    let sum5 = 0;
    if(document.getElementById("5").value == "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体，可以是某种图形；或者是一种数学表达式。")
    {
      sum5 += 20;
    }
    return sum5;
}
