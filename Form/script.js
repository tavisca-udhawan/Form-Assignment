 function styling(data){
        data.style.color="#ff0000";
        data.style.fontSize="0.8em";
        data.style.cssFloat="right";
        data.style.display="inline";
        data.style.fontWeight="bold";
        
 }
 function genderCheck(){
    var maleGender=document.getElementById("male");
    var femaleGender=document.getElementById("female");
    var transGender=document.getElementById("trans");
    if(maleGender.checked==false && femaleGender.checked==false && transGender.checked==false ) {
        var check= document.getElementById("gender-check");
        check.innerHTML="* You had not selected Gender";
        styling(check);
        return false;
    } 
    else{
        document.getElementById("gender-check").innerHTML=null;
        return true;
    }  
 }
function formValidation(){
    var name_flag=0;
    var gender_flag=0;
    var contact_flag=0;
    var city_flag=0;
    var email_flag=0;
    var first_name = document.forms["registerForm"]["firstName"].value;
    var last_name = document.forms["registerForm"]["lastName"].value;
    var contact = document.forms["registerForm"]["contact"].value;
    var email = document.forms["registerForm"]["email"].value;
    var address = document.forms["registerForm"]["address"].value;
    if (first_name == "") {
       var fname1= document.getElementById("f_name");
       fname1.innerHTML="* First Name must be filled";
       styling(fname1);
       name_flag=1;
    }
   if (contact == "") {
       var phone_content= document.getElementById("phone");
       phone_content.innerHTML="* Contact must be filled";
       styling(phone_content);
      // document.getElementById("contact").style.border="2px solid red";
       contact_flag=1;
   }
   if (email == "") {
       var email_data= document.getElementById("email");
       email_data.innerHTML="* Email must be filled";
       styling(email_data);
       email_flag=1;
   }
   if(genderCheck()==false){
          gender_flag=1;
   }
   else
   gender_flag=0;
   if(Validate()==false){
          city_flag=1;
   }
   else{
       city_flag=0;
   }
   if(name_flag==1 || contact_flag==1 || email_flag==1||gender_flag==1||city_flag==1){
       return false;
   }
   else {
    document.getElementById("email").innerHTML=null;
    document.getElementById("phone").innerHTML=null;
    document.getElementById("f_name").innerHTML=null;
    document.getElementById("gender-check").value=null;
    document.getElementById("city-content").value=null;
    return true;
   }
}
function FirstNameValidation(){
    var data=document.getElementById("fname");
    var letters = /^[A-Za-z]+$/;
    if(data.value.match(letters) || data.value=="")
    {
    document.getElementById("f_name").innerHTML=null;
    return true;
    }
    else
    {
       var fname= document.getElementById("f_name");
       fname.innerHTML="* first Name must have alphabet characters only";
       styling(fname);
       data.focus();
       return false;
    }
}
function LastNameValidation(){
    var data=document.getElementById("lstname");
    var letters = /^[A-Za-z]+$/;
    if(data.value.match(letters) || data.value=="")
    {
        document.getElementById("l_name").innerHTML=null;
        return true; 
    }
    else 
    {
       var lname= document.getElementById("l_name");
       lname.innerHTML="* Last Name must have alphabet characters only";
       styling(lname);
       data.focus();
       return false;
    }
}
function addressValidation(){
       var address= document.getElementById("text-area");
       var letters = /^[0-9a-zA-Z]+$/;
       if(address.value.match(letters) || address.value=="")
       {
        document.getElementById("address").innerHTML=null;
         return true; 
       }
       else
       {
        var addressData= document.getElementById("address");
        addressData.innerHTML="* You Entered Wrong data";
        styling(addressData);
        address.focus();
        return false;
       }
}
function contactValidation(){
       var contact_detail= document.getElementById("contact");
       var phoneNumber = /^\d{10}$/;
       if(contact_detail.value.match(phoneNumber)|| contact_detail.value=="")
       {
        document.getElementById("phone").innerHTML=null;
         return true; 
       }
       else
       {
        var contactData= document.getElementById("phone");
        contactData.innerHTML="* Contact Number must be 10 digits";
        styling(contactData);
        contact_detail.focus();
        return false;
       }
}
function emailValidation(){
       var email_detail= document.getElementById("email-content");
       var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if(email_detail.value.match(format) || email_detail.value=="")
       {
        document.getElementById("email").innerHTML=null;
         return true; 
       }
       else
       {
        var emailData= document.getElementById("email");
        emailData.innerHTML="* Invalid Email";
        styling(emailData);
        email_detail.focus();
        return false;
       }
}
function cancelRequest(){
        document.getElementById("f_name").innerHTML=null;
        document.getElementById("l_name").innerHTML=null;
        document.getElementById("address").innerHTML=null;
        document.getElementById("phone").innerHTML=null;
        document.getElementById("email").innerHTML=null;
        document.getElementById("gender-content").innerHTML=null;
        document.getElementById("city-content").innerHTML=null;
        document.getElementById("form").reset();
}
function Validate()
{
var e = document.getElementById("city");
var strUser = e.options[e.selectedIndex].value;
var strUser1 = e.options[e.selectedIndex].text;
if(strUser==0)
{
    var city_data= document.getElementById("city-content");
    city_data.innerHTML="* City must be Selected";
    styling(city_data);
    city_flag=1;
    return false;
}
else {
        document.getElementById("city-content").innerHTML=null;
        return true;
}
}