




$(document).ready(function() {


  
const usernames = ["cf0091cea7c8ee7327dc3a3d2845f94b","11b9e65ecd8eee8c9a545e8ee7f09bdc",  "735f33abd0d7909db1c7164370712266","735f33abd0d7909db1c7164370712266"];

// إنشاء مصفوفة لكلمة المرور
const passwords = ["CSCE101", "CSCE102", "intro", "CPluse"];



$('#loginButton').click(function() {
  var user = $('#username').val();
  const hashValue = CryptoJS.MD5(user).toString();
  var password = $('#password').val();
  var errorMessage = $('#error-message');
  const usernameIndex = usernames.indexOf(hashValue);

 
      if(usernameIndex === -1) {
    errorMessage.text('اسم المستخدم أو كلمة المرور غير صحيحة');
   }


  for (let i = 0; i < usernames.length; i++) {
    if (hashValue === usernames[i] && password === passwords[i]) {
      document.cookie = 'username=' + user + '; expires=30; path=/';
      window.location.href = `${passwords[i]}VIP.html`;
     } 
    
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
