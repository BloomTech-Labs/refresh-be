module.exports=function(profile){
const cleanProfile ={}
const addProp = (prop, value) =>{
    cleanProfile[prop] = value
}

console.log(profile)
//Email
!!profile.emails[0].value && addProp('email',profile.emails[0].value)//facebook

//display_name
!!profile.displayName && addProp('display_name',profile.displayName)//facebook

//lname
!!profile.familyName && addProp('lname',profile.family_name)//google
!!profile.name.familyName && addProp('lname',profile.name.familyName)//facebook

//fname
!!profile.given_name && addProp('fname',profile.given_name)//google
!!profile.name.givenName && addProp('fname',profile.name.givenName)//facebook

//Profile Picture
!!profile.photos[0].value && addProp('profile_pic', profile.photos[0].value)//facebook
console.log('Clean Profile',cleanProfile)
return cleanProfile
}