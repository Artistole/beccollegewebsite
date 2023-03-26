import emailPic from "/src/assets/icons/Envelope.png";

let staff = (props) => {
	const { item } = props;
    const [data, setData] = useState([{
        id: "",
        staffId: "",
        file: "",
        fileName: ""
    }])


    const arrayBufferToBase64 = buffer => {
        let binary = '';
        let bytes = new Uint8Array(buffer);
        let len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    };


    useEffect(() => {
        getStaffImage().then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])

	return (
		<div className="staff-wrapper flex">
			<div className="staff-pic ml-2">
				<img className="h-36" src={`data:image/png;base64,${arrayBufferToBase64(data.filter(x =>x.staffId == item.staffId).map(y =>y.file).toString())}`} alt="staff picture"></img>
			</div>
			<div className="staff-text flex flex-col ml-2 justify-around">
				<div className="staff-name font-bold">{item.name}</div>
				<div className="staff-designation">{item.staffDesignation}</div>
				<div className="staff-breaker flex flex-row items-center">
					<div className="staff-line h-1 w-11/12 md:w-52 bg-primaryColor"></div>
					<div className="staff-circle h-3 -ml-1 w-3 bg-primaryColor rounded-full"></div>
				</div>
				<div className="staff-education font-medium text-sm">
					{item.staffEdu}
				</div>
				{item.staffEmail && (
					<div className="staff-email flex items-center flex-wrap">
						<img className="h-6" src={emailPic}></img>
						<a	
							className="text-primary font-medium underline underline-offset-2"
							href="mailto: + {item.staffEMail}"
						>
							Send email
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default staff;