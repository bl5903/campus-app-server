const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		imageUrl:"https://lh3.googleusercontent.com/proxy/KHQA6v4Yw3kiST8jiD14v5d-S_MfyLLg2tV0tMly8wiBn0of3t-Mu2Tz58scl1M471w15sKPvtRkCpTrgBg-LPM12bsdZU4nS4qvn3SkkbnlXeGN6MttBFOtc6FJJvIGLIqvT0AU72GS4Lc",
		address:"695 Park Ave, New York, NY 10065"
	});

	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		imageUrl:"https://college.harvard.edu/sites/default/files/styles/billboard_image/public/2019-05/fpo-linderpix-harvard-58118.jpg?itok=x-OnBrai",
		address:"University Hall Cambridge, MA 02138"
	});

	const dummy_campus3 = await Campus.create({
		name: "University of Alabama",
		description: "This is a school in AL.",
		imageUrl:"https://newcollege.ua.edu/wp-content/uploads/2020/04/LloydHall2-1.jpg",
		address:"Tuscaloosa, AL 35487"
	});

	const dummy_campus4 = await Campus.create({
		name: "University of Oklahoma",
		description: "This is a school in OK.",
		imageUrl:"https://www.visitnorman.com/uploads/The-University-of-Oklahoma/Campus/ou_lib.jpg",
		address:"660 Parrington Oval, Norman, OK 73019"
	});

	const dummy_campus5 = await Campus.create({
		name: "Coastal Carolina University",
		description: "This is a school in SC.",
		imageUrl:"https://www.cappex.com/sites/default/files/styles/college_hero_desktop/public/images/hero/college/218724_hero.jpg?itok=Xn0Kof4P",
		address:"100 Chanticleer Dr E, Conway, SC 29528"
	});

	const dummy_student = await Student.create({
			firstname: "Jaelen",
			lastname: "Jones",
			email: "triplejragereader@aol.com",
			gpa: 2.47
	});

		await dummy_student.setCampus(dummy_campus);

}

module.exports = seedDB;
