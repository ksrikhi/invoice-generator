const getPdfTemplates = (data) => {
    const { billingDetail: {
        clientName,
        streetAddress,
        city,
        state,
        phoneNumber,
        email },
        items,
        profileDetail: {
            companyName,
            companyAddress,
            city: cityaddress,
            phoneNumber: mobileNumber,
            State: companyState,
        }
    } = data
    return `
    <!DOCTYPE html>
<html>

<head>
    <title>INVOICE</title>
    <style>

    body {
        color: #2a2a2a;
        font-family: Helvetica, Arial, sans-serif;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        font-size:16px;
    }

        .flex-container {
            margin-left: 10%;
            margin-right: 10%;
            margin-top: 1em;
            display: flex;
            flex-direction: column;
        }

        .compantProfile {
            display: flex;
            flex-direction: column;
            justify-content: end;
         
        }

        h1 {
            font-size: 5em;
            margin: 0;
        }

        p {
            margin: 0 0 7px;
        }

        .clientDetail {
            flex: 50%;
        }

        .flex-box {
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
        }

        .flex-start {
            justify-content: flex-start;
        }

        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
            margin: 25px 0 10px;
            text-align: center;
            table-layout: fixed;
            width:100%;
           
        }

        td:empty::after {
            content: "";
        }

        span {
            margin-left: 40%;
        }
    </style>
</head>

<body>
    <div style="border-top: 15px solid #b24522;"></div>
    <div class="flex-container">
        <div style='padding: 10px 0; display: table; overflow: hidden; margin: 0 0 10px;'>
            <h1 style='display: table-cell; vertical-align: top; width: 100%; padding-right: 25px;'>INVOICE</h1>
            <div style="vertical-align: top;">
                <p><b>${companyName}</b></p>
                <p>${companyAddress}</p>
                <p>${cityaddress}</p>
                <p>${companyState}</p>
                <p>${mobileNumber}</p>
                <p>${email}</p>
            </div>
        </div>
        <div style="border-top: 5px solid gray; margin: 30px 0;"></div>

        <div  style='padding: 10px 0; display: table;'>

            <div style='display: table-cell; vertical-align: top; width:350px'>
                <p> <b>Billing To:</b> </P>
                <p>${clientName}</p>
                <p>${streetAddress}</p>
                <p>${city}</p>
                <p>${state}</p>
                <p>${phoneNumber}</p>
                <p>${email}</p>
            </div>
                <div class="flex-box">
                    <div  style='display: table-cell; vertical-align: top;width:350px '>
                        <p> <b>Issued Date:</b></p>
                        <p><b>Invoice Number </b> </p>
                        <p> <b>Client Id</b> </p>
                    </div>
                    <div style='display: table-cell; vertical-align: top; margin-left: 20%;'>
                        <p><b></b>04/02/2019</p>
                        <p>672195-A </p>
                        <p> 88427 </p>
                    </div>
                </div>
        </div>
        <table >
            <tr>
                <th>Discription</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Amount</th>
            </tr>
            ${items.map(({discription,unitCost,quantity}=item) => {
                return `
                <tr>
                <td >${discription}</td>
                <td>${unitCost}</td>
                <td>${quantity}</td>
                <td>${(+quantity * +unitCost)}</td>
            </tr>`
            })}
        </table>


        <div style="flex: 100%; margin-left: 70%; ">
            <p>Subtotal:<span>0.00</span> </p>
            <p>Tax Rate:<span style="margin-left: 39%;">0.00%</span></p>
            <P style="margin-left:-20px ;">Tax Amount:<span style="margin-left: 36%;">0.00</span></P>
        </div>
        <div style="flex: 100%; margin-left: 65%;border-top: 5px solid gray; ">
            <p style="margin:5px 0 0 20% "><b>Total:</b><span style="margin-left:45%;"><b>0.00</b></span></p>
        </div>
        <div style="flex: 100%; margin-left: 65%;border-top: 5px solid gray; "></div>
        <div>
          <p style="margin: 15px 0 30px; font-weight: 200;font-size: 17px;"><b>Additional Comments: </b>Please return payment within 16 days for issued date.</p>
            <p style="margin-bottom: 30px; text-align: center; font-weight: 200;font-size: 17px;"><b>Thank you for your business!</b></p>
            <p style="margin:0 0 10px 33%;font-weight: 200;font-size: 17px;">if you have any questions or inquaries, please contect.</p>
            <p style="margin:0 0 15px 31%;font-weight: 200;font-size: 17px;">Contect Name,(000)000-0000, or billing@companyname.com</p>
        </div>
    </div>
    <footer>
    <div style="border-top: 15px solid #b24522;"></div>
    </footer>
</body>
</html>
    `
}
module.exports = getPdfTemplates;