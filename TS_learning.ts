// // interface: describe object's shape
// interface app{
//     name: string;
//     age: number;
// }
// // can create that shape's object by this:
// const anant : ap = {
//     name: "Anant Prajapati",
//     age: 20,
// }


// can create a class of that and use the object:
// class first{
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }
// const ap: first = new first ("Anant Prajapati", 20); //Both are ok
// const ap: app = new first ("Anant Prajapati", 20);

// Don't care about type. Also Unknown is there.
// let ok: any = "anant";
// ok = 8;

// Array
// const arr: string[] = ["Yash"];
// arr.push("Anant");

// typed array: fixed length as-well-as the data type
// let arr : [number,string];
// arr = [1,"anant"];

// for objects. ex: Json
// const info : {name: string, age: number} = {
//     name: "Anant",
//     age: 20
// };

// If want to put any attribute in option (No idea wheather to use it or not)
// const info : {name: string, age ?: number} = {
//     name: "Anant"
// };


// Functions
// (): void (to return nothing). can also use the optional type in perameter like ?:

// function ap(a : number): string{
//     console.log("Hii Anant");
//     return "Anant";
// }
// ap(83);



// For casting use => as or <> 


// Enum: If we have too much constant variable so we can define them in one object 


// type alias -> used to create custom type of object
type user = {
    user_id: string,
    password: string
}

let user1 : user = {
    user_id  : "anant83", 
    password : "123"  
};
user1.user_id = "anant83";
user1.password = "anant";
console.log(user1);


// typeof obj_name to get the data type of the obj

// intersection -> & can be used to create a type that has both of the property