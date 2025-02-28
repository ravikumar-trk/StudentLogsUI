import { useContext, useState, useEffect } from "react";
import { Context } from "../../App";
import { IStickyEntity, IStickyData } from "../General/GeneralUtils";
import { GetSchoolsDropdownService } from "../../Services/AccountServices.service";
import { ILoginDataDTO } from "../../Common/Store/ContaxtStore";
import { ToastMessage } from "../../Common/Components/ToastMessage";
import { Grid } from "@mui/material";
import SLTable from "../../Common/Components/Table/Table";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";

const rows = [
    {
        key: '1',
        AdmissionNo: "S1-12345",
        Class: "First Class",
        RollNo: "1",
        StudentName: "Ravi",
        StudentID: "1",
        // View: "",
    },
    {
        key: '2',
        AdmissionNo: "S1-42646",
        Class: "Second Class",
        RollNo: "2",
        StudentName: "Kumar",
        StudentID: "2",
        // View: "",
    },
    {
        key: '3',
        AdmissionNo: "S2-56846",
        Class: "Third Class",
        RollNo: "3",
        StudentName: "Tyadi",
        StudentID: "3",
        // View: "",
    },
    {
        key: '4',
        AdmissionNo: "S2-56713",
        Class: "Fourth Class",
        RollNo: "4",
        StudentName: "TRK",
        StudentID: "4",
        // View: "",
    },
];
interface FilmOptionType {
    title: string;
    year: number;
}
const Students = () => {
    const [context, setContext] = useContext<ILoginDataDTO[]>(Context);
    const [SchoolData, setSchoolData] = useState<any[]>([]);
    const [IStickyEntity, setIStickyEntity] = useState<IStickyEntity>(IStickyData);
    const navigate = useNavigate();

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option: FilmOptionType) => option.title,
    };
    const flatProps = {
        options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = useState<FilmOptionType | null>(null);

    const Error = () => {
        setIStickyEntity((prevState) => ({
            ...prevState,
            ID: 0,
            Type: 0,
            Message: "Internal server error",
            Time: 3000,
            ShowToast: true,
        }));
    };

    const NoData = () => {
        setIStickyEntity((prevState) => ({
            ...prevState,
            ID: 0,
            Type: 0,
            Message: "No data found",
            Time: 3000,
            ShowToast: true,
        }));
    };

    const ClearSticky = () => {
        setIStickyEntity((prevState) => ({
            ...prevState,
            ShowToast: false,
        }));
    };

    const GetStudentsList = async () => {
        ClearSticky();
        let GetStudentsListEntity = {
            isDropdown: 0,
            accountID: context.LoginAccountID,
        };
        const res: any = await GetSchoolsDropdownService(GetStudentsListEntity);
        debugger;
        if (res.status === 200) {
            var data = JSON.parse(res?.data?.result);
            if (data.length === 0) {
                NoData();
            } else {
                setSchoolData(data);
            }
        } else {
            Error();
        }
    };
    useEffect(() => {
        // GetStudentsList();
    }, []);

    const handleRowClick = (data: any) => {
        navigate(`/StudentDetails/${data.StudentID}`); // Navigate to /about
    }

    return (
        <div>
            {IStickyEntity.ShowToast ? <ToastMessage data={IStickyEntity} /> : <></>}
            <Grid container className="mt_10">
                <div className="row m_0 mb_12 w_100">
                    <div className="col-lg-3 col-md-">
                        <Autocomplete
                            {...defaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField {...params} label="School" variant="standard" />
                            )}
                        />
                    </div>
                    <div className="col-lg-3 col-md-">
                        <Autocomplete
                            {...defaultProps}
                            disabled={true}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField {...params} label="Class" variant="standard" />
                            )}
                        />
                    </div>
                </div>

                <SLTable rows={rows} page='Students' handleClick={handleRowClick} />
            </Grid>
        </div>
    );
};
export default Students;


const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];