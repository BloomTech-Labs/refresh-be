module.exports=function(profile){
const cleanProfile ={}
const addProp = (prop, value) =>{
    cleanProfile[prop] = value
}

//Email
!!profile.emails[0].value && addProp('email',profile.emails[0].value)//facebook

//display_name
!!profile.displayName && addProp('display_name',profile.displayName)//facebook,google

//lname
!!profile.name.familyName && addProp('lname',profile.name.familyName)//facebook,google

//fname
!!profile.name.givenName && addProp('fname',profile.name.givenName)//facebook,google

//Profile Picture
!!profile.photos[0].value && addProp('avatar', profile.photos[0].value)//facebook
return cleanProfile
}