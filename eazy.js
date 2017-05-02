
var meds = {
  pend_med: [
    {
      name: "Asmanex",
      photo: "asmanex2.png",
      refills: 2,
      rx_number: 12345
    },
    {
      name: "Advair",
      photo: "advair.png",
      refills: "None",
      rx_number: 89674
    },
  ],
  refill: [
    {
      name: "Lipitor",
      photo: "lipitor.png",
      refills: 2,
      rx_number: 57462
    }
  ], 
  pickup: [
    {
      name: "Nexium",
      pharmacy: "CVS Cambridge",
      time: "Thursday, 10 AM",
      photo: "nexium.png",
      refills: "None",
      rx_number: 78537
    }
  ]
}

var patients = {
    
    patient: [
        {
            name: "Danielle Okezie",
            date: "3/29/17 5 pm",
            photo: "me.jpg",
            reason: "Nauseous from inhaler, is this a symptom from the drug?"
        },
        {
            name: "Adesola Sanusi",
            date: "3/29/17 2:30 pm",
            photo: "adesola.jpg",
            reason: ""
        },
        {
            name: "Stan Matoreva",
            date: "3/29/17 10:00 am",
            photo: "stan.jpg",
            reason: ""
        },
        {
            name: "Stephen Xi",
            date: "3/28/17 1:45 pm",
            photo: "stephen.jpg",
            reason: ""
        }  
    ],
}

var prescriptions = {
  pend_presc: [
    {
      patient: "Danielle Okezie",
      name: "Asmanex",
      rx_number: 12345,
      photo: "asmanex2.png"
    },
    {
      patient: "Adesola Sanusi",
      name: "Advair",
      rx_number: 89674,
      photo: "advair.png"
    }
  ],

  request_presc: [
    {
      patient: "Stan Matoreva",
      name: "Lipitor",
      rx_number: 89674,
      photo: "lipitor.png"

    }
  ],

  ready_presc: [
    {
      patient: "Stephen Xi",
      name: "Nexium",
      rx_number: 78537,
      photo: "nexium.png"
    }
  ],
}

var payment = {
	active: [
		{
			photo: "mastercard-logo.png", 
			name: "Mastercard", 
			card: "**** **** **** 1234",
			status: "Edit" 
		}
	], 
	
	inactive: [
		{
			photo: "visa-logo.png", 
			name: "Visa", 
			card: "**** **** **** 3456",
			status: "Use" 
		}
	]
}

var insurance = {
	active: [
		{
			photo: "bcbs-logo.png", 
			name: "Blue Cross Blue Shield", 
			card: "**** **** **** 9876",
			status: "Edit" 
		}
	], 
	
	inactive: [
		{
			photo: "hap-logo.png", 
			name: "HAP", 
			card: "**** **** **** 8785",
			status: "Use" 
		}
	]
}

function displayPrescriptions() {
  var prescriptionsHtml = "";
  prescriptionsHtml += '<ul data-role="listview" data-inset="true" style="width:100%">';
  prescriptionsHtml += '<li data-role="list-divider">Pending Prescriptions</li>';
  for(var i=0; i<prescriptions.pend_presc.length; i++) {
    prescriptionsHtml += '<li>';
    prescriptionsHtml += '<img src="' + prescriptions.pend_presc[i].photo + '"/>';
    prescriptionsHtml += '<h3>' + prescriptions.pend_presc[i].name + '<\h3>';
    prescriptionsHtml += '<p>' + prescriptions.pend_presc[i].patient + 
      '<br> Prescription number: ' + prescriptions.pend_presc[i].rx_number + '</p>';
    prescriptionsHtml += '</li>';
  }
  
  prescriptionsHtml += '<li data-role="list-divider">Request Prescription</li>';
  for(var j=0; j<prescriptions.request_presc.length; j++) {
    prescriptionsHtml += '<li>';
    prescriptionsHtml += '<img src="' + prescriptions.request_presc[j].photo + '"/>';
    prescriptionsHtml += '<h3>' + prescriptions.request_presc[j].name + '<\h3>';
    prescriptionsHtml += '<p>' + prescriptions.request_presc[j].patient +
      '<br> Prescription number: ' + prescriptions.request_presc[j].rx_number + '</p>';
		//prescriptionsHtml += '<a href="#approve_request" class="ui-btn">Approve Prescription</a>';
		prescriptionsHtml += '<a href="#approve_request" onclick="approvePrescription(' + j + ')" class="ui-btn">Approve Prescription</a>';
    prescriptionsHtml += '</li>';
  }
  
  prescriptionsHtml += '<li data-role="list-divider">Prescription Ready</li>';
  for(var k=0; k<prescriptions.ready_presc.length; k++) {
    prescriptionsHtml += '<li>';
    prescriptionsHtml += '<img src="' + prescriptions.ready_presc[k].photo + '"/>';
    prescriptionsHtml += '<h3>' + prescriptions.ready_presc[k].name + '<\h3>';
    prescriptionsHtml += '<p>' + prescriptions.ready_presc[k].patient +
      '<br> Prescription number: ' + prescriptions.ready_presc[k].rx_number + '</p>';
		//prescriptionsHtml += '<a href="#notify_patient" class="ui-btn">Notify Patient</a>';
		prescriptionsHtml += '<a href="#notify_patient" onclick="notifyPatient(' + k + ')" class="ui-btn"> Notify Patient </a>'
    prescriptionsHtml += '</li>';
  }
  
  prescriptionsHtml += '</ul>';
  
  $("#prescriptions").html(prescriptionsHtml);
}

function displayPatient() {
    var patientsHtml = "";
    for (var i = 0; i < patients.patient.length; i++) {     
        patientsHtml += '<div data-role="collapsible" id = "p' + i + '">';    
        patientsHtml += '<img class = "smalls" src="' + patients.patient[i].photo + '"/>';
        patientsHtml += '<h3>' + patients.patient[i].name + " " + patients.patient[i].date + '<\h3>';
        patientsHtml += '<p class="smaller"> Reason: ' + patients.patient[i].reason + '</p>';
        patientsHtml += '<a href = "#dialog" onclick ="acceptPatient(' + i + ')" class="ui-btn ui-icon-check ui-btn-inline ui-btn-icon-left">Accept</a>';
        patientsHtml += '<a href="#" onclick ="declinePatient(' + i + ')" class="ui-btn ui-icon-delete ui-btn-inline ui-btn-icon-left">Decline</a>';
        patientsHtml += '</div>';
    }
    $("#people").html(patientsHtml);
    
    $("#wow").click(function() {
        dialogPatient();
    });
}

function declinePatient(index) {
  document.getElementById("p" + index).style.display = "none";
}

function acceptPatient(index) {
  var patientsHtml = ""; 
  patientsHtml += '<div role="main" class="ui-content" id="people">';
  patientsHtml += '<div data-role="header" data-theme="a">' + '<h3>Confirmation</h3>' + '</div>';
  patientsHtml += '<div role="main" class="ui-content">';
  patientsHtml += '<p>Please confirm below that you want to setup an appointment with ' + patients.patient[index].name + '. </p>';
  patientsHtml += '<a href="#manage_appt2" onclick="myFunction(' + index + ')" class="ui-btn ui-shadow ui-corner-all ui-btn-a">Yes</a>';
  patientsHtml += '<a href="#manage_appt" data-rel="back" class="ui-btn ui-shadow ui-corner-all ui-btn-a">No</a>';
  patientsHtml += '</div></div>';

  $("#dialog").html(patientsHtml);
}

function myFunction(index){
  document.getElementById("p" + index).style.display = "none";

  var patientsHtml = "";
  patientsHtml += '<li>' + patients.patient[index].name + " " + 'Date: ' + patients.patient[index].date;
  patientsHtml += '</li>';
  $("#add").html(patientsHtml);

}

function approvePrescription(index){
	var approveHtml = "";
	approveHtml += '<div data-role="header" data-theme="a"><h3>Confirm</h3></div>';
	approveHtml += '<p>Please confirm that you would like to approve a prescription request for ' + prescriptions.request_presc[index].patient + " for the medicine " + prescriptions.request_presc[index].name + '.</p>';
	approveHtml += '<a href="#afterApprove" onclick ="afterApprove()" class="ui-btn ui-shadow ui-corner-all ui-btn-a">Yes</a>';
  approveHtml += '<a href="#see_prescriptions" data-rel="back" class="ui-btn ui-shadow ui-corner-all ui-btn-a">No</a>';
  $("#approve_request").html(approveHtml);
}

function afterApprove() {
	var afterApproveHtml = "";
	afterApproveHtml += '<div data-role="header">';
	afterApproveHtml += '<a href="#pharm_home" data-role="button" data-icon="back" data-iconshadow="false" data-transition="slide" data-iconpos="notext"  class="ui-btn-left">back</a>';
	afterApproveHtml	+= '<p>See Prescriptions</p>';
	afterApproveHtml += '</div>';
	
	afterApproveHtml += '<div data-role="content">';
  afterApproveHtml += '<ul data-role="listview" data-inset="true" style="width:100%">';
  afterApproveHtml += '<li data-role="list-divider">Pending Prescriptions</li>';
  for(var i=0; i<prescriptions.pend_presc.length; i++) {
    afterApproveHtml += '<li>';
    afterApproveHtml += '<img src="' + prescriptions.pend_presc[i].photo + '"/>';
    afterApproveHtml += '<h3>' + prescriptions.pend_presc[i].name + '<\h3>';
    afterApproveHtml += '<p>' + prescriptions.pend_presc[i].patient + 
      '<br> Prescription number: ' + prescriptions.pend_presc[i].rx_number + '</p>';
    afterApproveHtml += '</li>';
  }
  
  for(var j=0; j<prescriptions.request_presc.length; j++) {
    afterApproveHtml += '<li>';
    afterApproveHtml += '<img src="' + prescriptions.request_presc[j].photo + '"/>';
    afterApproveHtml += '<h3>' + prescriptions.request_presc[j].name + '<\h3>';
    afterApproveHtml += '<p>' + prescriptions.request_presc[j].patient +
      '<br> Prescription number: ' + prescriptions.request_presc[j].rx_number + '</p>';
		afterApproveHtml += '<h3>Prescription Approved</h3>';
    afterApproveHtml += '</li>';
  }
  
	afterApproveHtml += '<li data-role="list-divider">Request Prescription</li>';
  afterApproveHtml += '<li data-role="list-divider">Prescription Ready</li>';
  for(var k=0; k<prescriptions.ready_presc.length; k++) {
    afterApproveHtml += '<li>';
    afterApproveHtml += '<img src="' + prescriptions.ready_presc[k].photo + '"/>';
    afterApproveHtml += '<h3>' + prescriptions.ready_presc[k].name + '<\h3>';
    afterApproveHtml += '<p>' + prescriptions.ready_presc[k].patient +
      '<br> Prescription number: ' + prescriptions.ready_presc[k].rx_number + '</p>';
		afterApproveHtml += '<a href="#notify_patient" onclick="notifyPatient(' + k + ')" class="ui-btn"> Notify Patient </a>'
    afterApproveHtml += '</li>';
  }
  
  afterApproveHtml += '</ul>';
	afterApproveHtml += '</div>';
  
  $("#afterApprove").html(afterApproveHtml);
}

function notifyPatient(index){
  var notifyHtml = "";
	notifyHtml += '<div data-role="header" data-theme="a"><h3>Confirm</h3></div>';
	notifyHtml += '<p>Please confirm that you would like to notify ' + prescriptions.ready_presc[index].patient + " that their prescription for " + prescriptions.ready_presc[index].name + ' is ready.</p>';
	notifyHtml += '<a href="#afterNotify" onclick ="afterNotify()" class="ui-btn ui-shadow ui-corner-all ui-btn-a">Yes</a>';
  notifyHtml += '<a href="#see_prescriptions" data-rel="back" class="ui-btn ui-shadow ui-corner-all ui-btn-a">No</a>';
  $("#notify_patient").html(notifyHtml);
}

function afterNotify() {
	var afterNotifyHtml = "";
	afterNotifyHtml += '<div data-role="header">';
	afterNotifyHtml += '<a href="#pharm_home" data-role="button" data-icon="back" data-iconshadow="false" data-transition="slide" data-iconpos="notext"  class="ui-btn-left">back</a>';
	afterNotifyHtml	+= '<p>See Prescriptions</p>';
	afterNotifyHtml += '</div>';
	
	afterNotifyHtml += '<div data-role="content">';
  afterNotifyHtml += '<ul data-role="listview" data-inset="true" style="width:100%">';
  afterNotifyHtml += '<li data-role="list-divider">Pending Prescriptions</li>';
  for(var i=0; i<prescriptions.pend_presc.length; i++) {
    afterNotifyHtml += '<li>';
    afterNotifyHtml += '<img src="' + prescriptions.pend_presc[i].photo + '"/>';
    afterNotifyHtml += '<h3>' + prescriptions.pend_presc[i].name + '<\h3>';
    afterNotifyHtml += '<p>' + prescriptions.pend_presc[i].patient + 
      '<br> Prescription number: ' + prescriptions.pend_presc[i].rx_number + '</p>';
    afterNotifyHtml += '</li>';
  }
  
  afterNotifyHtml += '<li data-role="list-divider">Request Prescription</li>';
  for(var j=0; j<prescriptions.request_presc.length; j++) {
    afterNotifyHtml += '<li>';
    afterNotifyHtml += '<img src="' + prescriptions.request_presc[j].photo + '"/>';
    afterNotifyHtml += '<h3>' + prescriptions.request_presc[j].name + '<\h3>';
    afterNotifyHtml += '<p>' + prescriptions.request_presc[j].patient +
      '<br> Prescription number: ' + prescriptions.request_presc[j].rx_number + '</p>';
		afterNotifyHtml += '<a href="#approve_request" onclick="approvePrescription(' + j + ')" class="ui-btn">Approve Prescription</a>';
    afterNotifyHtml += '</li>';
  }
  
  afterNotifyHtml += '<li data-role="list-divider">Prescription Ready</li>';
  for(var k=0; k<prescriptions.ready_presc.length; k++) {
    afterNotifyHtml += '<li>';
    afterNotifyHtml += '<img src="' + prescriptions.ready_presc[k].photo + '"/>';
    afterNotifyHtml += '<h3>' + prescriptions.ready_presc[k].name + '<\h3>';
    afterNotifyHtml += '<p>' + prescriptions.ready_presc[k].patient +
      '<br> Prescription number: ' + prescriptions.ready_presc[k].rx_number + '</p>';
		afterNotifyHtml += '<h3>Patient Notified</h3>';
    afterNotifyHtml += '</li>';
  }
  
  afterNotifyHtml += '</ul>';
  afterNotifyHtml += '</div>';
	
  $("#afterNotify").html(afterNotifyHtml);
}
    
function displayMeds() {
  var medsHtml = "";
  medsHtml += '<ul data-role="listview" data-inset="true" style="width:100%">';
  medsHtml += '<li data-role="list-divider">Pending Prescriptions</li>';
  for(var i=0; i<meds.pend_med.length; i++) {
    medsHtml += '<li>';
    medsHtml += '<img src="' + meds.pend_med[i].photo + '"/>';
    medsHtml += '<h3>' + meds.pend_med[i].name + '</h3>';
    medsHtml += '<p> Rx#: ' + meds.pend_med[i].rx_number + 
      '<br> # of Refills: ' + meds.pend_med[i].refills + '</p>';
    medsHtml += '</li>';
  }
  
  medsHtml += '<li data-role="list-divider">Ready for Refill</li>';
  for(var j=0; j<meds.refill.length; j++) {
    medsHtml += '<li>';
    medsHtml += '<img src="' + meds.refill[j].photo + '"/>';
    medsHtml += '<h3>' + meds.refill[j].name + '<\h3>';
    medsHtml += '<p>Rx#: ' + meds.refill[j].rx_number + 
      '<br> # of Refills: ' + meds.refill[j].refills + '</p>';
    medsHtml += '<a href="#refillDialog" onclick ="refillDialog(' + j + ')" data-role="button" id="fill">Click to Refill</a>';
    medsHtml += '</li>';
  }
  
  medsHtml += '<li data-role="list-divider">Ready for Pickup</li>';
  for(var k=0; k<meds.pickup.length; k++) {
    medsHtml += '<li>';
    medsHtml += '<img src="' + meds.pickup[k].photo + '"/>';
    medsHtml += '<h3>' + meds.pickup[k].name + '<\h3>';
    medsHtml += '<p> Rx#: ' + meds.pickup[k].rx_number + 
      '<br> # of Refills: ' + meds.pickup[k].refills + '</p>';
    medsHtml += '<a href="#pickups" data-role="button">Request Pickup Code</a>';
    medsHtml += '</li>';
  }
  
  medsHtml += '</ul>';
  medsHtml += '<a href="#refill" class="ui-btn">Add New Prescription</a>';
  
  $("#meds").html(medsHtml);
}

function refillDialog(index) {
	var refillHtml = "";
	refillHtml += '<div data-role="header" data-theme="a"><h3>Confirm</h3></div>';
	refillHtml += '<h4>' + meds.refill[index].name + " " + meds.refill[index].rx_number + '</h4>';
	refillHtml += '<p>Please confirm that you would like to submit a refill request for ' + meds.refill[index].name + " Rx#: " + meds.refill[index].rx_number + '.</p>';
	refillHtml += '<a href="#afterRefill" onclick ="afterRefill()" class="ui-btn ui-shadow ui-corner-all ui-btn-a">Yes</a>';
  refillHtml += '<a href="#see_rx" data-rel="back" class="ui-btn ui-shadow ui-corner-all ui-btn-a">No</a>';
  $("#refillDialog").html(refillHtml);
}

function afterRefill() {
	var afterHtml = "";
	afterHtml += '<div data-role="header">';
	afterHtml += '<a href="#patient_home" data-role="button" data-icon="back" data-iconshadow="false" data-transition="slide" data-iconpos="notext"  class="ui-btn-left">back</a>';
	afterHtml	+= '<p>My Prescriptions</p>';
	afterHtml += '</div>';
	
	afterHtml += '<div data-role="content">';
  afterHtml += '<ul data-role="listview" data-inset="true" style="width:100%">';
  afterHtml += '<li data-role="list-divider">Pending Prescriptions</li>';
  for(var i=0; i<meds.pend_med.length; i++) {
    afterHtml += '<li>';
    afterHtml += '<img src="' + meds.pend_med[i].photo + '"/>';
    afterHtml += '<h3>' + meds.pend_med[i].name + '</h3>';
    afterHtml += '<p> Rx#: ' + meds.pend_med[i].rx_number + 
      '<br> # of Refills: ' + meds.pend_med[i].refills + '</p>';
    afterHtml += '</li>';
  }
  
  //afterHtml += '<li data-role="list-divider">Ready for Refill</li>';
  for(var j=0; j<meds.refill.length; j++) {
    afterHtml += '<li>';
    afterHtml += '<img src="' + meds.refill[j].photo + '"/>';
    afterHtml += '<h3>' + meds.refill[j].name + '<\h3>';
    afterHtml += '<p>Rx#: ' + meds.refill[j].rx_number + 
      '<br> # of Refills: ' + meds.refill[j].refills + '</p>';
    afterHtml += '<h3>Refill Requested</h3>';
    afterHtml += '</li>';
  }
	
  afterHtml += '<li data-role="list-divider">Ready for Refill</li>';
  afterHtml += '<li data-role="list-divider">Ready for Pickup</li>';
	
  for(var k=0; k<meds.pickup.length; k++) {
    afterHtml += '<li>';
    afterHtml += '<img src="' + meds.pickup[k].photo + '"/>';
    afterHtml += '<h3>' + meds.pickup[k].name + '<\h3>';
    afterHtml += '<p> Rx#: ' + meds.pickup[k].rx_number + 
      '<br> # of Refills: ' + meds.pickup[k].refills + '</p>';
    afterHtml += '<a href="#pickups" data-role="button">Request Pickup Code</a>';
    afterHtml += '</li>';
  }
  
  afterHtml += '</ul>';
  afterHtml += '<a href="#refill" class="ui-btn">Add New Prescription</a>';
	afterHtml += '</div>';
	
  $("#afterRefill").html(afterHtml);
}

function displayPickups() {
  var pickupsHtml = "";
  pickupsHtml += '<form method="post" action="">';
  pickupsHtml += '<div class="ui-field-contain">';
  
  pickupsHtml += '<label style="text-align: left; font-weight: bold;" for="select-native-1">Medicine:</label>';
  pickupsHtml += '<select name="select-native-1" id="select-native-1" data-mini="true">';
  for(var i=0; i<meds.pickup.length; i++) {
    pickupsHtml += '<option value="1">' + meds.pickup[i].name + '</option>';
  }
  pickupsHtml += '</select>';
  
  pickupsHtml += '<label style="text-align: left; font-weight: bold;" for="select-native-2">Pharmacy:</label>';
	pickupsHtml += '<select name="select-native-2" id="select-native-2" data-mini="true">'; 
  for(var j=0; j<meds.pickup.length; j++) {
    pickupsHtml += '<option value="1">' + meds.pickup[j].pharmacy + '</option>';
  }
  pickupsHtml += '</select>'; 
  
  pickupsHtml += '<label style="text-align: left; font-weight: bold;" for="select-native-3">Pick Up Time:</label>';
  pickupsHtml += '<select name="select-native-3" id="select-native-3" data-mini="true">';
  for(var k=0; k<meds.pickup.length; k++) {
    pickupsHtml += '<option value="1">' + meds.pickup[k].time + '</option>';
  }
  pickupsHtml += '</select>'; 
  
  pickupsHtml += '</div>';
	pickupsHtml += '<li><a href="#request_code" data-role="button" class="custom_button">Request Code</a></li>';
  pickupsHtml += '</form>';
  
  $("#pickup_meds").html(pickupsHtml);
}

function displayPayment() {
	var paymentsHtml = "";
  paymentsHtml += '<ul data-role="listview" data-inset="true" style="width:100%">';
  paymentsHtml += '<li data-role="list-divider">Active</li>';
	
  for(var i=0; i<payment.active.length; i++) {
    paymentsHtml += '<li>';
    paymentsHtml += '<img src="' + payment.active[i].photo + '"/>';
    paymentsHtml += '<h3>' + payment.active[i].name + '<\h3>';
    paymentsHtml += '<p>' + payment.active[i].card + '</p>';
		paymentsHtml += '<a href="#">' + payment.active[i].status + '</a>';
    paymentsHtml += '</li>';
  }
	
	paymentsHtml += '<li data-role="list-divider">Inactive</li>';
  for(var j=0; j<payment.inactive.length; j++) {
    paymentsHtml += '<li>';
    paymentsHtml += '<img src="' + payment.inactive[j].photo + '"/>';
    paymentsHtml += '<h3>' + payment.inactive[j].name + '<\h3>';
    paymentsHtml += '<p>' + payment.inactive[j].card +'</p>';
		paymentsHtml += '<a href="#">' + payment.inactive[j].status + '</a>';
    paymentsHtml += '</li>';
  }
	
	paymentsHtml += '</ul>';
  paymentsHtml += '<a href="#payment_info" class="ui-btn">Add Payment Method</a>';
  
  $("#paymentinfo").html(paymentsHtml);
}

function displayInsurance() {
	var insuranceHtml = "";
  insuranceHtml += '<ul data-role="listview" data-inset="true" style="width:100%">';
  insuranceHtml += '<li data-role="list-divider">Active</li>';
	
  for(var i=0; i<insurance.active.length; i++) {
    insuranceHtml += '<li>';
    insuranceHtml += '<img src="' + insurance.active[i].photo + '"/>';
    insuranceHtml += '<h3>' + insurance.active[i].name + '<\h3>';
    insuranceHtml += '<p>' + insurance.active[i].card + '</p>';
		insuranceHtml += '<a href="#">' + insurance.active[i].status + '</a>';
    insuranceHtml += '</li>';
  }
	
	insuranceHtml += '<li data-role="list-divider">Inactive</li>';
  for(var j=0; j<insurance.inactive.length; j++) {
    insuranceHtml += '<li>';
    insuranceHtml += '<img src="' + insurance.inactive[j].photo + '"/>';
    insuranceHtml += '<h3>' + insurance.inactive[j].name + '<\h3>';
    insuranceHtml += '<p>' + insurance.inactive[j].card +'</p>';
		insuranceHtml += '<a href="#">' + insurance.inactive[j].status + '</a>';
    insuranceHtml += '</li>';
  }
	
	insuranceHtml += '</ul>';
  insuranceHtml += '<a href="#insurance_dialog" class="ui-btn">Add Insurance Card</a>';
  
  $("#insuranceinfo").html(insuranceHtml);
}


$(function() {
    displayPatient();
    displayMeds();
    displayPickups();
		displayPayment();
	  displayInsurance();
    displayPrescriptions();
});