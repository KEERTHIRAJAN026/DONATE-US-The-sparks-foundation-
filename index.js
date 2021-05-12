function validatename() 
  {
    var fname= document.getElementById('fname').value;
    var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
    if (rel.test(fname)) 
    {
      document.getElementById('fnameprompt').style.color="green";
      document.getElementById('fname').style.border="1px solid #ccc";
      document.getElementById('fnameprompt').innerHTML="valid";
      return true;
    }
    else
    {
      document.getElementById('fnameprompt').style.color="red";
      document.getElementById('fname').style.border="1px solid red";
      document.getElementById('fnameprompt').innerHTML="Enter 2-15 characters";
      return false;
    }
  }