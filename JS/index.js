document.getElementById("closebtn").style.visibility="hidden";
document.body.style.overflowX = "hidden";
function openNav() {
    document.getElementById("mySidebar").style.width = "170px";
    document.body.style.overflowX = "hidden";
    document.getElementById("main").style.visibility="hidden";
    document.getElementById("closebtn").style.visibility="visible";
    document.getElementById("logo").style.visibility="hidden";
    document.getElementById("offerBanner").style.display="none";
    document.getElementById("heroBannerDiv").style.display="none";
    document.getElementById("secBannerborder").style.display="none";
    document.getElementById("newslettercontainer").style.display="none";
    document.getElementById("featurecontainer").style.display="none";
    document.getElementById("product-teaser-small-bg").style.display="none"; 
    document.getElementById("teaser").style.display="none"; 
    document.getElementById("product-teaser-small-big").style.display="none"; 
    document.getElementById("teaser-two").style.display="none"; 
    document.getElementById("product-teaser-small-two").style.display="none";
    document.getElementById("image-tiles").style.display="none";
    document.getElementById("newslettercontainer").style.display="none";
    document.getElementById("footer").style.display="none";
    document.getElementById("myTopnav").style.backgroundColor="#F7F7F7"
    document.getElementById("custom--desktop--hide").style.marginLeft="0px";
    document.getElementById("headerfont").style.visibility="visible";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "";
    document.getElementById("myTopnav").style.backgroundColor="#e0e3e8";
    document.getElementById("heroBannerDiv").style.display="";
    document.getElementById("secBannerborder").style.display="";
    document.getElementById("newslettercontainer").style.display="";
    document.getElementById("featurecontainer").style.display="";
    document.getElementById("product-teaser-small-bg").style.display=""; 
    document.getElementById("teaser").style.display=""; 
    document.getElementById("product-teaser-small-big").style.display=""; 
    document.getElementById("teaser-two").style.display=""; 
    document.getElementById("product-teaser-small-two").style.display="";
    document.getElementById("image-tiles").style.display="";
    document.getElementById("newslettercontainer").style.display="";
    document.getElementById("footer").style.display=""; 
    document.getElementById("main").style.visibility="visible";
    document.getElementById("closebtn").style.visibility="hidden";
    document.getElementById("logo").style.visibility="visible";
    document.getElementById("custom--desktop--hide").style.marginLeft="222px";
}
