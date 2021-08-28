const express = require("express");
const connectDB = require ("./DB/connectDB")
const PersonDB = require("./Model/model")

const app = express();

const PORT =3000;

// new person 

//const Person = new PersonDB( { name:"Marwa ", age:29, favoriteFood:"spaghetti"})
//Person.save ((err)=>{
 // if (err) return handleError(err)
   // save
  //})

//Find All
//const search = async()=>{
  // try{
//const data = await PersonDB.find({});
//console.log(data)
  //  }
    //catch(err){
    //console.log(err)
    //}
 //}
//search()

//Find one
//const search = async()=>{
  // try{
//const data = await PersonDB.findOne({name:"Marwa"});
//console.log(data)
    //}catch(err){
    //console.log(err)
   //}
//}
//search()
//Find by id
//const search = async()=>{
 //try{
//const data = await PersonDB.findById({_id:"6129d2610f5e1f2f8c633fbd"});
//console.log(data)
    //}catch(err){
       // console.log(err)
   //}
//}
//search()


//Find One Person which has a certain food in the person's favorites
 //const search = async() => {
 // try {
    //const data = await PersonDB.findOne({favoriteFood: "soupe"})
    //console.log(data)
    //} catch (err) {
   //console.error(err)
  //}
//}
 //search()

//const UpdatefavoriteFood= async()=>
//{
  //try{
  // const update= await PersonDB.findOneAndUpdate({_id:"6129e14dabbbb82f80e0e225"} ,{$set:{'favoriteFood':"hamburger"}});
       
//console.log("update")
        //} catch (err){
      //  console.log(err) 
     // }
    //}
  

//UpdatefavoriteFood()
//const addAge = async()=>{
  //try{
     //const person= await PersonDB.findOneAndUpdate({_id:"6129e15d0302112628065b2f"} ,{$set:{'age':20}},{new:true, useFindAndModify: false});
         
  //console.log(person)
       // } catch (err){
        // console.log(err) 
       // }
  //  }
      //addAge()


//Fin one delet
//const Delete = async()=>{
   // await PersonDB.findOneAndDelete({_id:"6129e175f03a0a278c6dba75"}, (err,data)=>{
     //   try{
//console.log("removed Data",data)
     //   }catch(error){
        //    console.log(err)
       // }
   // })
//}

//Delete()


//Delete Many Documents with model.remove()

//const DeletePerson = async() => {
    // const res = await PersonDB.remove({name: "Marwa"}, (err, data) => {
       //  try {
        //    console.log("Persons removed ")
        // } catch (err) {
        //   console.error(err) 
        // }
    // })
   // }

 //DeletePerson()

  //_Find people who like pizza

//const chainSearch = async() => {
   // try {
     //const data = await PersonDB.find({favoriteFood: {$elemMatch: {$eq: "Maha"}}}).sort({name: 'Marwa'}).limit(2).select({age: 29, __v: 0}).exec()
         // console.log(data)
    //} catch (err) {
       // console.error(err)
   // }
//}
//chainSearch()


connectDB()

app.listen(PORT,(err)=>{
  err?
  console.log(err)
  : console.log(`server is ruuning in ${PORT}...`)
}
)