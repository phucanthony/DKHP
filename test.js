const webDriver = require('selenium-webdriver');

(async function testDKHP() {

	const driver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
	await driver.get('https://dkhp.hcmue.edu.vn/');
	await checkLogin(driver);
	// const register = await setInterval(() => registerListening6(driver), 1000);
	await registerListening6(driver, true, false);
	//driver.quit();
})();

async function checkLogin(driver) {
	return new Promise(async (resolve, reject) => {
		const url = await driver.getCurrentUrl();
		await console.log(url);
		if (url.indexOf('Login') !== -1) {
			await driver.findElement(webDriver.By.name('username')).sendKeys('41.01.701.122');
			await driver.findElement(webDriver.By.name('password')).sendKeys('Thutrang.');
			await driver.findElement(webDriver.By.className('loginbox-submit')).click();
			await driver.sleep(1000);
			await driver.findElement(webDriver.By.id('DangKyHocPhan&KH')).click();
			await driver.sleep(100);
		}
		await resolve();
	});
}

async function registerListening6(driver, isRepeat = false, isSecondTime = false) {
	return new Promise(async (resolve, reject) => {
		await checkLogin(driver);
		if (isSecondTime) {
			await driver.sleep(1000);
			const tableList = await driver.findElements(webDriver.By.css("td"));
			const limit = await tableList[54].getText();
			const currentStudent = await tableList[55].getText();
			if (parseInt(limit.substr(limit.indexOf('-') + 1)) <= parseInt(currentStudent)) {
				console.log('full', parseInt(limit.substr(limit.indexOf('-') + 1)) , parseInt(currentStudent));
				if (isRepeat) {
					await driver.executeScript("location.reload()");
					await driver.sleep(100);
					await registerListening6(driver, true, false);
				}
			} else {
				await driver.findElement(webDriver.By.id('1721ENGL141601$0.0$1721ENGL1416$$0')).click();
				const buttonList = await driver.findElements(webDriver.By.css("input"));
				await buttonList[5].click();
				await driver.quit();
			}
		}
		await driver.sleep(2000);
		await driver.executeScript('window.scrollBy(0, 600)','');
		await driver.sleep(100);
		await driver.findElement(webDriver.By.css('a[href*="javascript:GetClassStudyUnit(\'1721ENGL1416\',\'Biên dịch thực hành')).click();
		await registerListening6(driver, true, true);

		await resolve();
	});
}
