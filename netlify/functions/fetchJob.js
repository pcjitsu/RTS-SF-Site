const jobRecords = [
  {
    NoticeId: "5eb9468f7aca7a28b5e1eab288cc2b19",
    Title: "SOLICITATION COVERING WAREHOUSE STORAGE RACKS/STORAGE AND DISPLAY ROTARY BINS-SPECIAL ORDER PROGRAM",
    SolNum: "3FNH-A1-00005-N",
    Department: "GENERAL SERVICES ADMINISTRATION",
    Office: "GSA/FAS/GSS/QSCBC/ASSISTED CONTRACTING BRANCH A",
    AACCode: "47QSMC",
    PostedDate: "2000-09-08 01:00:00-04",
    Type: "Presolicitation",
    BaseType: "Presolicitation",
    Active: "No",
    PrimaryContactTitle: "Contract Specialist",
    PrimaryContactFirstName: "Anita",
    PrimaryContactLastName: "Cook",
    PrimaryContactEmail: "anita.cook@gsa.gov",
    PrimaryContactPhone: "703-605-9192",
    PrimaryContactFax: "703-605-9874",
    State: "DC",
    City: "Washington",
    ZipCode: "20006",
    CountryCode: "USA",
    Description:
      "71--WAREHOUSE STORAGE RACKS AND STORAGE DISPLAY ROTARY BINS--TOTAL SMALL BUSINESS SET-ASIDE--INDEFINITE QUANTITY, SPECIAL ORDER PROGRAM--CONTRACT PERIOD DATE OF AWARD THROUGH TWO (2) YEARS LATER, WITH THREE (3) ADDITIONAL ONE-YEAR OPTION PERIODS. TO VIEW THIS REQUIREMENT REFER TO SOLICITATION NUMBER CITED ABOVE UNDER WWW.FEDBIZOPPS.GOV. SOLICITATION COPIES MAY BE OBTAINED BY SENDING YOUR REQUEST TO THE ADDRESS ABOVE.",
  },
  {
    NoticeId: "7c58d943a1b2d04adef82610954d27d0",
    Title: "PROVIDE SATELLITE TELEVISION SERVICES AT MOODY AFB, GA",
    SolNum: "F09607-00-R0033",
    Department: "DEPT OF DEFENSE",
    Office: "FA4830  23 CONS CC",
    AACCode: "FA4830",
    PostedDate: "2000-09-14 01:00:00-04",
    Type: "Presolicitation",
    BaseType: "Presolicitation",
    Active: "No",
    PrimaryContactTitle: "Contract Specialist",
    PrimaryContactFirstName: "Barbara",
    PrimaryContactLastName: "Miller",
    PrimaryContactEmail: "barbara.miller@moody.af.mil",
    PrimaryContactPhone: "229-257-3561",
    PrimaryContactFax: "229-257-4709",
    State: "GA",
    City: "MOODY AFB",
    ZipCode: "31699-1700",
    CountryCode: "USA",
    Description:
      "Provide Satellite Television Services at Moody AFB, GA. The solicitation number for this procurement is F09607-00-R0033 and is issued as a Request for Proposal (RFP). The contractor shall provide all personnel, equipment, tools, materials, supervision and other items and services to provide satellite television service to Moody AFB dormitory residents. The Satellite Services shall minimize the number of satellite dishes required to provide coverage to dormitory areas by using best available technology. Individual subscribers shall be allowed to subscribe to various programming packages and be billed individually. There are currently two main dormitory areas spanning a distance of approximately 3000 feet. There are 9 dormitories with an approximate 550 potential subscribers. A 10th dormitory with approximately 150 potential subscribers will be added in the near future. Allowance for expansion must be made for the new dormitory area. The contractor shall be responsible for service and repairs to installed system for the life of the contract. Site visit information will be included in the solicitation. This solicitation will be set aside 100% for small business. The North American Industry Classification (NAIC) for this solicitation is 513220; the small business size standard is $11,000,000.00. The contract will be for a basic period of one (1) year with up to four (4) one year options, the total contract will not exceed five (5) years. There will be no exclusive rights or right of entry agreements. The solicitation will be issued on or about 17 Nov 00. The solicitation will be located on the Electronic Posting System (EPS). No paper copies of this solicitation will be mailed. All amendments will be electronically posted. A copy of the solicitation will be available for review at the Contracting Office (Moody AFB, GA). This acquisition shall be solicited in accordance with FAR Part 12, Acquisition of Commercial Items. The point of contact is SSgt Brian Mentel, (229) 257-2959. The Contracting Officer is Mr. K.D. Dawsey (229) 257-3465.",
  },
];

exports.handler = async function (event, context) {
  const randomIndex = Math.floor(Math.random() * jobRecords.length);
  return {
    statusCode: 200,
    body: JSON.stringify(jobRecords[randomIndex]),
  };
};