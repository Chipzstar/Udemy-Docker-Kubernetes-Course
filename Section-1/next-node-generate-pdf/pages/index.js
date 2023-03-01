import Head from 'next/head';
import {useState} from 'react';
import styles from '../styles/Home.module.css';
import dayjs from "dayjs";

export default function Home() {
	const [name, setName] = useState('Customer');

	// container function to generate the Invoice
	const generateInvoice = e => {
		e.preventDefault();
		// send a post request with the name to our API endpoint
		const fetchData = async () => {
			const data = await fetch('http://localhost:3000/api/generate-invoice', {
				method: 'POST',
				body: JSON.stringify({
					name,
					email: "ola@usevoyage.com",
					company: "Otech Transportation",
					createdAt: dayjs().unix(),
					dueOn: dayjs().add(30, "days").unix(),
					invoiceId: "030F3593",
					tripId: "VOY-ID19023027",
					tripTotal: 600.00,
					vat: 120.00,
					totalDue: 720.00
				}),
			});
			// convert the response into an array Buffer
			return data.arrayBuffer();
		};

		// convert the buffer into an object URL
		const saveAsPDF = async () => {
			const buffer = await fetchData();
			const blob = new Blob([buffer]);
			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = 'invoice.pdf';
			link.click();
		};

		saveAsPDF().then(r => console.log("PDF saved successfully!"));
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Generate Customer Invoice</title>
				<link rel='icon' href='/favicon.ico'/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Hello {name} 👋</h1>

				<p className={styles.description}>
					Fill the form below to generate your invoice
				</p>

				<form className={styles.form}>
					<div className={styles.field}>
						<label htmlFor='name'>Enter Name</label>
						<input
							id='name'
							type='text'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>

					<button onClick={generateInvoice} className={styles.button}>Download Invoice</button>
				</form>
			</main>
		</div>
	);
}
