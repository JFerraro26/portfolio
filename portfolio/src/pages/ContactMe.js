import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const isEmail = (email) =>
	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const isPhone = (phone) => {
	const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	if (phone.length === 0) {
		return true;
	} else if (
		phone.length === 12 &&
		phone[0] in numbers &&
		phone[1] in numbers &&
		phone[2] in numbers &&
		phone[3] === "-" &&
		phone[4] in numbers &&
		phone[5] in numbers &&
		phone[6] in numbers &&
		phone[7] === "-" &&
		phone[8] in numbers &&
		phone[9] in numbers &&
		phone[10] in numbers &&
		phone[11] in numbers
	) {
		return true;
	} else {
		return false;
	}
};

function ContactMe() {
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [submittedError, setSubmittedError] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (isEmail(email)) {
			setEmailError(false);
			if (isPhone(phone)) {
				setPhoneError(false);
				const data = {
					service_id: "service_s3gd05q",
					template_id: "contact_form",
					user_id: "HravWIATSm76uAc_m",
					template_params: {
						user_email: email,
						phone: phone,
						message: message,
					},
				};
				const url = "https://api.emailjs.com/api/v1.0/email/send";
				const fetchConfig = {
					method: "post",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
					},
				};
				const response = await fetch(url, fetchConfig);
				console.log(response);
				if (response.ok) {
					setSubmittedError(false);
					setSubmitted(true);
					setEmail("");
					setPhone("");
					setMessage("");
				} else {
					setSubmittedError(true);
					setSubmitted(false);
				}
			} else {
				setPhoneError(true);
			}
		} else {
			setEmailError(true);
		}
	};
	useEffect(() => {
		if (submitted) {
			setTimeout(() => {
				setSubmitted(false);
			}, 3000);
		}
	}, [submitted]);
	return (
		<div className="flex flex-col md:my-32 items-center md:text-lg md:max-w-5xl md:gap-4 w-full">
			<h1 className="font-bold md:text-4xl text-red-500 text-center">
				Contact
			</h1>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col  gap-4 w-3/4"
			>
				<div className="flex flex-col">
					<label className="px-2 pb-1" htmlFor="email">
						Email
						{emailError ? (
							<span className="text-red-500">
								: format (username@email.com)
							</span>
						) : null}
					</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="px-2 py-1 rounded-lg text-red-500 border border-transparent bg-slate-800 focus:outline-none focus:border-red-500"
						required
						type="email"
						id="email"
						name="email"
						placeholder="username@email.com"
						size="30"
					/>
				</div>
				<div className="flex flex-col">
					<label className="px-2 pb-1" htmlFor="phone">
						Phone Number(optional)
						{phoneError ? (
							<span className="text-red-500">
								: format (XXX-XXX-XXXX)
							</span>
						) : null}
					</label>
					<input
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						className="px-2 py-1 rounded-lg text-red-500 border border-transparent bg-slate-800 focus:outline-none focus:border-red-500"
						type="tel"
						id="phone"
						name="phone"
						placeholder="XXX-XXX-XXXX"
					/>
				</div>
				<div className="flex flex-col">
					<label className="px-2 pb-1" htmlFor="message">
						Message
					</label>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="px-2 py-1 rounded-lg text-red-500 border border-transparent bg-slate-800 focus:outline-none focus:border-red-500"
						required
						type="text"
						id="message"
						name="message"
						rows="10"
						placeholder="How can I help You?"
					/>
				</div>
				<div className="flex justify-end">
					<button className="md:w-40 md:text-2xl border-2 border-blue-500 rounded-2xl hover:border-blue-300">
						Submit
					</button>
				</div>
			</form>
			<div className="flex justify-center">
				<AnimatePresence>
					{submitted ? (
						<motion.h1
							className="m-4 rounded-xl text-white bg-green-600 text-4xl p-6"
							key="Created"
							initial={{ x: "100vw" }}
							animate={{ x: 0 }}
							exit={{
								x: "100vw",
								transition: { duration: 1 },
							}}
							transition={{ duration: 0.5 }}
						>
							Submitted
						</motion.h1>
					) : emailError || phoneError ? (
						<motion.h1
							className="m-4 rounded-xl text-white bg-red-500 text-4xl p-6"
							key="Created"
							initial={{ x: "-100vw" }}
							animate={{ x: 0 }}
							exit={{
								x: "-100vw",
								transition: { duration: 0.5 },
							}}
							transition={{ duration: 0.5 }}
						>
							Error
						</motion.h1>
					) : submittedError ? (
						<motion.h1
							className="m-4 rounded-xl text-white bg-red-500 text-4xl p-6"
							key="Created"
							initial={{ x: "-100vw" }}
							animate={{ x: 0 }}
							exit={{
								x: "-100vw",
								transition: { duration: 0.5 },
							}}
							transition={{ duration: 0.5 }}
						>
							Error Submitting
						</motion.h1>
					) : null}
				</AnimatePresence>
			</div>
		</div>
	);
}
export default ContactMe;
