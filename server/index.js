require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT
const app = express();
app.set("port",PORT);
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/sendmail', async (req, res) => {
	console.log(req.body);

	const msg = {
		to: req.body.yourEmail,
		from: req.body.yourEmail,
		subject: req.body.subject,
		text: req.body.content,
		replyTo: req.body.replyEmail
	}

	
	sgMail.send(msg).then(() => {
		res.status(200).json({
			success: true,
				message: 'Your message has been successfully sent. I will get back to you as soon as possible!'
		});
	}, (error) => {
		res.status(200).json({
			success: false,
			message: 'It seems like something went wrong. Please try again later.'
		});
})
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
	});
}

app.listen(4242, () => console.log(`Listening on port ${4242}!`));

