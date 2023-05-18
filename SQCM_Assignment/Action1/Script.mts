'To close running background Flight gui EXE.
SystemUtil.CloseProcessByName "FlightsGUI.exe" 
 'To start the flight gui application.
SystemUtil.Run "D:\Downloads\samples\Flights Application\FlightsGUI.exe"
 'Text checkpoint to verify opened application to check  "Username".
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Check CheckPoint("agentName") @@ hightlight id_;_1995071816_;_script infofile_;_ZIP::ssf545.xml_;_
'variable Declarations
Dim username, password, from, destination, journeyDate, seatClass, numTicket, cell, passengerName, i 
'Initiating the variables to a value from the data table
username = DataTable.Value("username", "Global")
password = DataTable.Value("password", "Global")
from = DataTable.Value("from", "Global")
destination = DataTable.Value("destination", "Global")
journeyDate = DataTable.Value("journeyDate", "Global")
seatClass = DataTable.Value("seatClass", "Global")
numTicket = DataTable.Value("numTickets", "Global")
cell = 1
passengerName = DataTable.Value("passengerName", "Global")

'login part
i = DataTable.GetCurrentRow
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set username @@ hightlight id_;_1995071816_;_script infofile_;_ZIP::ssf547.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set password @@ hightlight id_;_1966520312_;_script infofile_;_ZIP::ssf549.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
'finding flight
wait(2)
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "D:\UFT\UFT\Screenshots\"&i&"-Before-findingflights.png", True 'taking screenshots
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select city @@ hightlight id_;_1966519256_;_script infofile_;_ZIP::ssf551.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select destination @@ hightlight id_;_1993189080_;_script infofile_;_ZIP::ssf553.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate journeyDate @@ hightlight id_;_1936955504_;_script infofile_;_ZIP::ssf555.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select seatClass @@ hightlight id_;_1993191960_;_script infofile_;_ZIP::ssf557.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select numTicket @@ hightlight id_;_1936956368_;_script infofile_;_ZIP::ssf559.xml_;_
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "D:\UFT\UFT\Screenshots\"&i&"-After-findingflight.png", True
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").Check CheckPoint("datePicker") @@ hightlight id_;_2232106_;_script infofile_;_ZIP::ssf572.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf574.xml_;_

WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "D:\UFT\UFT\Screenshots\"&i&"-Before-selectingfile.png", True
'Bitmap checkpoint for verify the next page is loading properly. Checks Select Flight present.
WpfWindow("Micro Focus MyFlight Sample").WpfObject("SELECT FLIGHT").Check CheckPoint("SELECT FLIGHT") @@ hightlight id_;_2003530376_;_script infofile_;_ZIP::ssf577.xml_;_

wait(2)
'Selecting a specific flight from the list presented for the above filled values. 
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell "1", "2" @@ hightlight id_;_1966524104_;_script infofile_;_ZIP::ssf579.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf581.xml_;_
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "D:\UFT\UFT\Screenshots\"&i&"-After-Selectingflight.png", True

WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "D:\UFT\UFT\Screenshots\"&i&"-Before-finalizingthetrip.png", True
 'Bitmap checkpoint for verifying the next page is loading properly. Checks on the "Passenger Name" present in the image.
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Passenger Name:").Check CheckPoint("Passenger Name:") @@ hightlight id_;_2003531184_;_script infofile_;_ZIP::ssf584.xml_;_
wait(2)

'name and confirmation
wait(2)
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set passengerName @@ hightlight id_;_1933920192_;_script infofile_;_ZIP::ssf586.xml_;_
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "D:\UFT\UFT\Screenshots\"&i&"-After-finalizingthetrip.png", True
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1933920000_;_script infofile_;_ZIP::ssf588.xml_;_
wait(2)

'Start the process again by closing the app
WpfWindow("Micro Focus MyFlight Sample").Close

