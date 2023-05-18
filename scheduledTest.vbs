Set App = CreateObject("QuickTest.Application")
App.Launch
App.Visible = True
App.open "D:\UFT\UFT\SQCM_Assignment", False
Set objResultsOptions = CreateObject("QuickTest.RunResultsOptions")
Set appTest = App.Test

appTest.Save
appTest.Run objResultsOptions
