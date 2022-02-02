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

WebUI.openBrowser('')

WebUI.navigateToUrl('https://rezijiser.herokuapp.com/web/#/login')

WebUI.setText(findTestObject('Object Repository/Page_Rezijiser/input_Rezijiser_mat-input-0'), 'slavko.slavkic@gmail.com')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_Rezijiser/input_Email_mat-input-1'), 'wbCVaHpczzJVmXhK6nq/oA==')

WebUI.click(findTestObject('Object Repository/Page_Rezijiser/button_Prijava'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Page_Rezijiser/a_Odjava'))

WebUI.click(findTestObject('Object Repository/Page_Rezijiser/button_Rezijiser_btn-new'))

WebUI.setText(findTestObject('Object Repository/Page_Rezijiser/input_concat(id(, , mat-input-2, , ))_mat-input-2'), '2/15/2022')

WebUI.setText(findTestObject('Object Repository/Page_Rezijiser/input_Datum dospijea_mat-input-3'), '2/5/2022')

WebUI.setText(findTestObject('Object Repository/Page_Rezijiser/input_Datum plaanja_mat-input-4'), '80.5')

WebUI.click(findTestObject('Object Repository/Page_Rezijiser/div_Cijena_mat-select-arrow-wrapper ng-tns-c64-9'))

WebUI.click(findTestObject('Object Repository/Page_Rezijiser/span_Priuva'))

WebUI.click(findTestObject('Object Repository/Page_Rezijiser/button_Dodaj'))

WebUI.closeBrowser()

