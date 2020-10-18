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
            state: companyState,
            email: emailaddress,
        }
    } = data;
    const subTotal = items.reduce((accumulator, currentValue) => accumulator +
        currentValue.quantity * currentValue.unitCost, 0)
    const subtotal = subTotal.toFixed(2);
    const taxCal = +subTotal * 0.13;
    tax = +taxCal.toFixed(2)
    const taxFormated = tax;
    const total = +taxFormated + +subTotal;
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const currentDate = `${year}-${month}-${date}`
    const clientId = Math.floor((Math.random() * 999999) + 1);
    return `
    <!DOCTYPE html>
<html>

<head>
    <title>INVOICE</title>
    <style>
    @page {
        size: A4;
    }

    @page :left {
        margin-left: 1cm;
    }

    @page :right {
        margin-left: 1cm;
    }

    @page :first {
        margin-top: 1cm;
    }

    body {
        color: #2a2a2a;
        font-family: Helvetica, Arial, sans-serif;
        max-width: 1200px;
        width: 100%;
        margin-top: 1em;
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
            font-size: 3em;
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
    <div class="flex-container">
        <div style='padding: 10px 0; display: table; overflow: hidden; margin: 0 0 10px;'>
            <h1 style='display: table-cell; vertical-align: top; width: 100%; padding-right: 25px;'>INVOICE</h1>
            <div style="vertical-align: top;">
                <p><b>${companyName}</b></p>
                <p>${companyAddress}</p>
                <p>${cityaddress}</p>
                <p>${companyState}</p>
                <p>${mobileNumber}</p>
                <p>${emailaddress}</p>
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
                    <div  style=' vertical-align: top '>
                        <p> <b>Issued Date: </b></p>
                        <p> <b>Invoice No: </b> </p>
                    </div>
                    <div style='display: table-cell; vertical-align: top; margin-left: 10%;'>
                        <p><b></b>${currentDate}</p>
                        <p>${clientId} </p>
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
            ${items.map(({ discription, unitCost, quantity } = item) => {
        return `
                <tr>
                <td >${discription}</td>
                <td>$${unitCost}</td>
                <td>${quantity}</td>
                <td>$${(+quantity * +unitCost).toFixed(2)}</td>
            </tr>
           `
    })}
        </table>


        <div style="flex: 100%; margin-left: 50%; ">
            <p "margin-left:-10px ;">Subtotal:<span> $${subtotal}</span> </p>
            <p>Tax Rate:<span style="margin-left: 12%;">13%</span></p>
            <P style="margin-left:-10px ;">Tax Amount:<span style="margin-left: 10%;">${taxFormated}</span></P>
        </div>
        <div style="flex: 100%; margin-left: 65%;border-top: 5px solid gray; ">
            <p style=" margin-left:15%"><b>Total:</b><span style="margin-left:10%;"><b>$${total.toFixed(2)}</b></span></p>
        </div>
        <div style="flex: 100%; margin-left: 65%;border-top: 5px solid gray; "></div>
        <div>
          <p style="margin-bottom: 30px; margin-top: 20px;  text-align: center; font-weight: 200;font-size: 17px;"><b>Thank you for your business!</b></p>
            <p style= "text-align: center;font-weight: 200;font-size: 17px;">if you have any questions or inquaries, please contect.</p>
            <p style="text-align: center;font-weight: 200;font-size: 17px;">Contect Name,(000)000-0000, or billing@companyname.com</p>
        </div>
    </div>
</body>
</html>
    `
}
module.exports = getPdfTemplates;