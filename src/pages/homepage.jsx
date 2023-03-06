import React, { useEffect, useState } from "react";
import { getLandingPageData } from "../config/services";


export default function HomePage() {
	const [data, setData] = useState([])

	const getData = () => {
		getLandingPageData().then(res =>
			setData(res.data)
		).catch(err =>
			console.log('something went wrong', err)
		)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<div className="mt-11">This is the home page 123</div>
			{data.map(x =>
				<div>
					{x.principal.name}
					{x.principal.message}

					{x.alumni.map(y =>
						<div>
							{y.name}
						</div>
					)}
				</div>
			)}
		</>
	);
}
