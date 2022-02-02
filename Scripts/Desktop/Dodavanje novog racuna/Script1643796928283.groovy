import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

Windows.startApplicationWithTitle('C:\\Users\\stjep\\AppData\\Local\\Programs\\Rezijiser\\Rezijiser.exe', 'Rezijiser')

Windows.setText(findWindowsObject('Object Repository/Desktop_Rezijiser/Edit'), 'slavko.slavkic@gmail.com')

Windows.setEncryptedText(findWindowsObject('Object Repository/Desktop_Rezijiser/Edit(1)'), 'wbCVaHpczzJVmXhK6nq/oA==')

Windows.click(findWindowsObject('Object Repository/Desktop_Rezijiser/Button'))

Windows.click(findWindowsObject('Object Repository/Desktop_Rezijiser/Button(1)'))

Windows.setText(findWindowsObject('Object Repository/Desktop_Rezijiser/Edit(2)'), '2/15/2022')

Windows.setText(findWindowsObject('Object Repository/Desktop_Rezijiser/Edit(3)'), '2/5/2022')

Windows.setText(findWindowsObject('Object Repository/Desktop_Rezijiser/Edit(4)'), '80')

Windows.click(findWindowsObject('Object Repository/Desktop_Rezijiser/ComboBox'))

Windows.click(findWindowsObject('Object Repository/Desktop_Rezijiser/List'))

Windows.setText(findWindowsObject('Object Repository/Desktop_Rezijiser/Edit Potrosnja'), '4')

Windows.click(findWindowsObject('Object Repository/Desktop_Rezijiser/Button(2)'))

Windows.click(findWindowsObject('Object Repository/Desktop_Rezijiser/HyperLink'))

Windows.closeApplication()

