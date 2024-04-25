// require("dotenv").config();
// const nodeMailer = require("nodemailer");

// async function nodeMailer() {

// 	const emailContent = `
// 	<p>This is the content of the email!</p>
// 	`;

// 	const transporter = nodeMailer.createTransport({
// 		host: "smtp-mail.outlook.com", 
// 		port: 587,
// 		secure: false,
// 		requireTLS: true,
// 		// logger: true, /*Uncomment these lines for more information on the requests/response to and from the server.*/
// 		// debug: true,
// 		auth: {
// 			user: process.env.SENDER_EMAIL,
// 			pass: process.env.SENDER_PASSWORD
// 		}
// 	});

// 	const info = await transporter.sendMail({
// 		from: `Shelf Controll Book forum <${process.env.SENDER_EMAIL}>`,
// 		to: process.env.RECEIVER_EMAIL,
// 		subject: "test email",
// 		html: emailContent
// 	});
// 	console.log("message sent: " + info.messageId);
// };

// nodeMailer().catch(error => console.log(error));

// module.exports = nodeMailer;