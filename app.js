
// 1. //
{
    class Student{
        constructor( fname, lname, tel, address){
            this.fname = fname
            this.lname = lname
            this.tel = tel
            this.address = address
        }
        getFullName(){
            return `${this.fname} ${this.lname}`
        }
        info(){
           return `${this.fname} ${this.lname} ${this.tel} ${this.address}`
        }
    }

    let student = new Student("Xalilillo", "Jamoliddinov", +998889990969, "Sergeli")
    let student2 = new Student("Xalilillo", "Jamoliddinov","tel: " +998889990969, "manzil: Sergeli")
    console.log(student);
    console.log(student.getFullName());
    console.log(student2.info());
}


// 2. //
{
    class Teacher{
        constructor( fname, lname, address, salary, level){
            this.fname = fname
            this.lname = lname
            this.address = address
            this.salary = salary
            this.level = level
        }
        getFullName(){
            return `${this.fname} ${this.lname}`
        }
        info(){
           return `${this.fname} ${this.lname} ${this.address}  ${this.salary} ${this.level}`
        }
    }

    let teacher = new Teacher("Boburmirzo", "Rasulov", " Olmazor", "4000 mln", 1  )
    let teacher2 = new Teacher("Boburmirzo", "Rasulov", "manzil: Olmazor", "level: 1", "ish haqi - 4000 mln"  )
    console.log(teacher);
    console.log(teacher.getFullName());
    console.log(teacher2.info());
}


// 3. //
{
    class Group{
        constructor(name, room, teacher, level, studentCounts){
            this.name = name
            this.room = room
            this.teacher = teacher
            this.level = level
            this.studentCounts = studentCounts
        }
        fullInformation(){
          return  `${this.name} ${this.room} ${this.teacher} ${this.level} ${this.studentCounts}`
        }
    }
    let group = new Group("ReactJS | Frontend (Standard) ","Slack ", "Rasulov Boburmirzo", "level 4", 15)
    let group2 = new Group("ReactJS | Frontend (Standard) yo'nalish","Slack xonasi", "O'qituvchining ismi: Rasulov Boburmirzo", "level 4", "O'quvchilar soni (15) ta")
    console.log(group);
    console.log(group2.fullInformation());
}


// 4. //
{
    class Payment{
        constructor(from, to, amount, date, status){
            this.from = from
            this.to = to
            this.amount = amount
            this.date = date
            this.status = status
        }
        getStatus(){
            return ` ${this.from} ${this.to} ${this.amount} ${this.date} ${this.status}`
        }
    }

    let payment = new Payment("Asror", "Jamshidga", 1000, `14:15:45`, true)
    let payment2 = new Payment("Asrordan", "Jamshidga",  "14:15:45", "1000 so'm pul", "muvaffaqqyatli o'tkazildi.")
    console.log(payment);
    console.log(payment2.getStatus());
}


// 5. //
{
    class Salary{
        constructor( to, amount, date, type, status){
            this.to = to
            this.amount = amount
            this.type = type
            this.date = date
            this.status = status
        }
        getInfo(){
            return `  ${this.to} ${this.amount} ${this.date} ${this.type}  ${this.status}`
        }
    }

    let salary = new Salary("Mike", 150, "21:52:05",  `USD`,   true)
    let salary2 = new Salary("Mike", "21:52:05", 150, "USD", "oyligini oldi.")
    console.log(salary);
    console.log(salary2.getInfo());
}


// 6. //
{
    class Organization{
        constructor( name, founder, address, employeeCount){
            this.name = name
            this.founder = founder
            this.address = address
            this.employeeCount = employeeCount
        }
        getInfo(){
            return `  ${this.name} ${this.founder} ${this.address} ${this.employeeCount}`
        }
    }

    let organization = new Organization("Najot talim", "Temurbek Adhamov", "Chilonzor", 400)
    let organization2 = new Organization("Najot talim. ", "Asoschisi: Temurbek Adhamov ", "manzil: Chilonzor", "xodimlar soni 400dan ortiq.")
    console.log(organization);
    console.log(organization2.getInfo());
}


// Qo'shimcha //
// 7. //
{
    class Uzbekistan{
        constructor(regions, population){
            this.regions = regions
            this.population =population
        }
        info(){
            return `${this.regions} ${this.population}`
        }
    }

    let uzbekistan = new Uzbekistan(`12 ta`, `37 million`)
    let uzbekistan2 = new Uzbekistan("Toshkent, Andijon, Farg'ona, Namangan, Buxoro, Jizzax, Qashqadaryo, Navoiy, Samarqand, Sirdaryo, Surxondaryo, Xorazm viloyatlari bor. ", " 37 million axolisi bor Shundan 18,3 millioni ayollar, 18,6 millioni erkaklardir. ")

    console.log(uzbekistan);
    console.log(uzbekistan2.info());
}


// 8. //
{
    class School{
        constructor(address, teachers, students ){
            this.address = address
            this.teachers = teachers
            this.students = students
        }
        info(){
            return ` ${this.address} ${this.teachers} ${this.students} `
        }
    }

    let school = new School(`Andijon`, 200, 2_500)
    let school2 = new School(`Andijon viloyati Paxtaobod tumanidagi 1-maktabning`, `200dan ortiq o'qituvchilar bor`, `2.500 mingga yaqin o'quvchilar bor`)
    console.log(school);
    console.log(school2.info());
    
}


// 9. //
{
    class Course{
        constructor(address, lesson, course_time, amount, ){
            this.address = address
            this.lesson = lesson
            this.course_time = course_time
            this.amount = amount
        }
        info(){
            return `${this.address} ${this.lesson} ${this.course_time} ${this.amount}`
        }
    }
    
    let course = new Course(`Farg'ona`, `Ingiliz tili`, `1 yil`, 1_000)
    let course2 = new Course(`Kurs farg'onada joylashgan`, `kursning asosiy fani ingliz tili `, `1 yil ichida o'rgatiladi va`, `xar oylik to'lov 1000 mln so'm.`)
    console.log(course);
    console.log(course2.info());
}
