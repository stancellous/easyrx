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

function displayPrescriptions() {
  var prescriptionsHtml = "";
  prescriptionsHtml += '<ul data-role="listview" data-inset="true">';
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
		prescriptionsHtml += '<a href="#approve_request" class="ui-btn">Approve Prescription</a>';
    prescriptionsHtml += '</li>';
  }
  
  prescriptionsHtml += '<li data-role="list-divider">Prescription Ready</li>';
  for(var k=0; k<prescriptions.ready_presc.length; k++) {
    prescriptionsHtml += '<li>';
    prescriptionsHtml += '<img src="' + prescriptions.ready_presc[k].photo + '"/>';
    prescriptionsHtml += '<h3>' + prescriptions.ready_presc[k].name + '<\h3>';
    prescriptionsHtml += '<p>' + prescriptions.ready_presc[k].patient +
      '<br> Prescription number: ' + prescriptions.ready_presc[k].rx_number + '</p>';
		prescriptionsHtml += '<a href="#notify_patient" class="ui-btn">Notify Patient</a>';
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
        patientsHtml += '<p class = "smaller"> Reason: ' + patients.patient[i].reason + '</p>';
        patientsHtml += '<a href="#more" class="ui-btn ui-icon-check ui-btn-inline ui-btn-icon-left">Accept</a>';
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
    document.getElementById("p" + index).style.display = "none";  
}
    
function displayMeds() {
  var medsHtml = "";
  medsHtml += '<ul data-role="listview" data-inset="true">';
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
    medsHtml += '<a id="fill" href="#refillDialog " data-role="button" id="fill">Click to Refill</a>';
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
  
  $("#fill").click(function() {
      refillDialog();
  });
}

function refillDialog() {
  var dialogHtml = "";
  for (var i = 0; i < meds.refill.length; i++) {
      dialogHtml += '<div data-role="header" data-theme="a"><h3>Confirm</h3></div>';
      dialogHtml += '<h4>' + meds.refill[i].name + '</h4>'
      dialogHtml += '<img src="' + meds.refill[i].photo + '"/>';
      dialogHtml += '<p>Please confirm that you would like to submit a refill request for this medication.</p>';
			dialogHtml += '<a href="#patient_home" class="ui-btn ui-shadow ui-corner-all ui-btn-a">Yes</a>';
			dialogHtml += '<a href="#refill2" data-rel="back" class="ui-btn ui-shadow ui-corner-all ui-btn-a">No</a>';
  }
    $("#refillDialog").html(dialogHtml);
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

$(function() {
    displayPatient();
    displayMeds();
    displayPickups();
    displayPrescriptions();
});