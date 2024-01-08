




$(document).ready(function() {

    var videoLinks = [
    "https://www.youtube.com/embed/-nUZ1_YbgM4?si=x9z_UwtPguoNRk9t",
    "https://www.youtube.com/embed/-nUZ1_YbgM4?si=x9z_UwtPguoNRk9t",
    "https://www.youtube.com/embed/-nUZ1_YbgM4?si=x9z_UwtPguoNRk9t",
    "https://www.youtube.com/embed/-nUZ1_YbgM4?si=x9z_UwtPguoNRk9t",
    "https://www.youtube.com/embed/-nUZ1_YbgM4?si=x9z_UwtPguoNRk9t"
];
var videoNames = [
  " شرح خطة المقرر ",
  " lectuer 1.1 | Components of a Personal Computer ",
  " lectuer 1.2 | What is programming ",
  " lectuer 1.3 | Java ",
  " lectuer 1.3 | Java program "
];

var videoRow = document.getElementById("videoRow");

for (var i = 0; i < videoLinks.length; i++) {
    var link = videoLinks[i];

    var colDiv = document.createElement("div");
    colDiv.className = "col-xl-3 col-xxl-4 col-lg-6 col-md-6 text-center";

    var cardDiv = document.createElement("div");
    cardDiv.className = "card";

    var iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "315";
    iframe.src = link;
    iframe.title = "YouTube video player";
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowfullscreen = true; // تم تفعيل ملء الشاشة هنا

    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    var heading = document.createElement("h3");
    heading.textContent = videoNames[i];

    var open = document.createElement("a");
    open.style.backgroundColor = "rgb(61, 116, 116)";
    open.style.display = "block";
    open.style.width = "200px";
    open.style.height = "30px";
    open.style.lineHeight = "30px";
    open.style.color = "white";
    open.style.borderRadius = "20px";
    open.style.margin ="auto";
   
    open.textContent = " فتح ";
    open.href = link;

    cardBodyDiv.appendChild(heading);
    cardBodyDiv.appendChild(open);
    cardDiv.appendChild(iframe);
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);
    videoRow.appendChild(colDiv);
   
}
        
    
  




  
  
 

// إنشاء مصفوفة للاسم المستعار
const usernames = ["ahmad", "mohammed", "ali"];

// إنشاء مصفوفة لكلمة المرور
const passwords = ["CSCE101", "CSCE102", "intro", "CPluse"];




$('#loginButton').click(function() {
  var user = $('#username').val();
  var password = $('#password').val();
  var errorMessage = $('#error-message');
 
  if (user === 'alzeeka' && password === 'java') {
   // إنشاء ملف تعريف الارتباط
   document.cookie = 'username=' + user + '; expires=30; path=/';
   window.location.href = '../CSCE101VIP.html';
  } 
  
 
 
  else {
   errorMessage.text('اسم المستخدم أو كلمة المرور غير صحيحة');
  }
 });









/*


// الحصول على اسم المستخدم وكلمة المرور من النموذج عند الإرسال
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة بعد الإرسال

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // التحقق مما إذا كان الاسم المستعار موجودًا في المصفوفة
  const usernameIndex = usernames.indexOf(username);
  if (usernameIndex !== -1 && password === passwords[usernameIndex]) {
    // تحويل المستخدم إلى الصفحة المناسبة بناءً على اسم المستخدم
    //window.location.href = `../${passwords[usernameIndex]}VIP.html`;
    window.location.href = `CSCE101VIP.html`;
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة");
  }
});
*/
 
  




  
});
