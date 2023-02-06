import Movie from "./Movie";
import batman from '../playground/img/batman.jpg'
import superman from '../playground/img/superman.jpg'
import spiderman from '../playground/img/spiderman.jpg'
import UserImage from "./UserImage";
import ClassSample from "./ClassSample";
import Person from "./Person";
import Student from "./Student";

const Playground = () => {
    const students = [
        {
            fullName: 'Ivan Horvat',
            average: 4.2,
            passed: ['fizika', 'OOP', 'TZK'],
            jmbag: 74839587385
        },
        {
            fullName: 'Stipe Mesić',
            average: 3.1,
            passed: ['biologija', 'kemija', 'filozofija', 'logika'],
            jmbag: 74839587385
        },
        {
            fullName: 'Ivo Andrić',
            average: 2.6,
            passed: ['biologija', 'kemija', 'filozofija', 'logika'],
            jmbag: 74839587385
        }
    ]



    return (
        <>

            {
                students.map((student) => {
                    return (
                        <>
                            <Student
                                fullName={student.fullName}
                                average={student.average}
                                jabuka={student.passed}
                                jmbag={student.jmbag}
                            />
                            <br />
                        </>
                    )
                })
            }
            

            <hr /> <hr />
            <Person
                name="Stipe"
                surname="Mesić"
                birthday={1898}
                address="Pantovčak 108"
                parties={["HDZ", "SDP", "Možemo", "Ne možemo"]}
            />

            <Person
                name="Frane"
                surname="Bilić"
                birthday={1919}
                address="Zagrebačka cesta 108"
                parties={["HNS", "HSLS", "HSS"]}
            />

            <Movie
                title="Batman"
                image={batman}
            />
            <Movie
                title="Superman"
                image={superman}
            />
            <Movie
                title="Spiderman"
                image={spiderman}
            />

            <UserImage />
            <ClassSample />
        </>

    )
}

export default Playground;