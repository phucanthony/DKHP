const webDriver = require('selenium-webdriver');

(async function testDKHP() {

	const driver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
	await driver.get('https://dkhp.hcmue.edu.vn/');
	// await checkLogin(driver);
	// const register = await setInterval(() => registerListening6(driver), 1000);
	await registerListening6(driver, true, true);
	//driver.quit();
})();

async function checkLogin(driver) {
	return new Promise(async (resolve, reject) => {
		try {
			await driver.findElement(webDriver.By.css('a[href*="/Login/index')).click();
		} catch (e) {

		}
		const url = await driver.getCurrentUrl();
		await console.log(url);
		if (url.indexOf('Login') !== -1) {
			await driver.findElement(webDriver.By.name('username')).sendKeys('41.01.701.122');
			await driver.findElement(webDriver.By.name('password')).sendKeys('Chaulen3');
			await driver.findElement(webDriver.By.className('loginbox-submit')).click();
			await driver.sleep(1000);
			await driver.executeScript('window.scrollBy(0, 200)','');
			await driver.sleep(200);
			await driver.findElement(webDriver.By.id('DangKyHocPhan&KH')).click();
			await driver.sleep(100);
		}
		await driver.sleep(2000);
		await driver.executeScript('window.scrollBy(0, 600)','');
		await driver.sleep(100);
		await driver.findElement(webDriver.By.css('a[href*="javascript:GetClassStudyUnit(\'1721ENGL1416\',\'Biên dịch thực hành')).click();

		await resolve();
	});
}

async function registerListening6(driver, isRepeat = false, isSecondTime = false) {
	return new Promise(async (resolve, reject) => {
		await checkLogin(driver);
		if (isSecondTime) {
			await driver.sleep(1000);
			const tableList = await driver.findElements(webDriver.By.css("td"));
			const limitClassOne = await tableList[63].getText();
			const currentStudentClassOne = await tableList[64].getText();
			const limitClassTwo = await tableList[72].getText();
			const currentStudentClassTwo = await tableList[73].getText();
			if (parseInt(limit.substr(limit.indexOf('-') + 1)) <= parseInt(currentStudent)) {
				console.log('full', parseInt(limit.substr(limit.indexOf('-') + 1)) , parseInt(currentStudent));
			} else {
				console.log('not full', limit.substr(limit.indexOf('-') + 1) , currentStudent);
				await driver.findElement(webDriver.By.id('1721ENGL141601$0.0$1721ENGL1416$$0')).click();
				const buttonList = await driver.findElements(webDriver.By.css("input"));
				await buttonList[5].click();
				await driver.quit();
			}
		}
		await registerListening6(driver, true, true);

		await resolve();
	});
}
