export type IMenuLinks = {
  Link: string;
  text: string;
  IsExtended: boolean;
  ParentID: number;
  MenuID: number;
};

export class MenuLinks {
  public router: IMenuLinks[] = [
    {
      Link: "",
      text: "Master Data",
      IsExtended: true,
      ParentID: 0,
      MenuID: 1,
    },
    {
      Link: "CreateAccountReceivable",
      text: "Create Account Receivable",
      IsExtended: false,
      ParentID: 1,
      MenuID: 2,
    },
    {
      Link: "CreateAccountPayable",
      text: "Create Account Payable",
      IsExtended: false,
      ParentID: 1,
      MenuID: 3,
    }, ///
    {
      Link: "",
      text: "Invoice Details",
      IsExtended: true,
      ParentID: 0,
      MenuID: 4,
    },
    {
      Link: "AccountReceivableDetails",
      text: "Account Receivable Details",
      IsExtended: false,
      ParentID: 4,
      MenuID: 5,
    },
    {
      Link: "AccountPayableDetails",
      text: "Account Payable Details  ",
      IsExtended: false,
      ParentID: 4,
      MenuID: 6,
    }, ///
    {
      Link: "",
      text: "Settings",
      IsExtended: true,
      ParentID: 0,
      MenuID: 7,
    },
    {
      Link: "CustomerCreation",
      text: "Customer Creation",
      IsExtended: false,
      ParentID: 7,
      MenuID: 8,
    },
    {
      Link: "VendorCreation",
      text: "Vendor Payable",
      IsExtended: false,
      ParentID: 7,
      MenuID: 9,
    },
    {
      Link: "POCreation",
      text: "PO Creation",
      IsExtended: false,
      ParentID: 7,
      MenuID: 10,
    },
    {
      Link: "UserCreation",
      text: "User Creation",
      IsExtended: false,
      ParentID: 7,
      MenuID: 11,
    },
    {
      Link: "Dashboard",
      text: "Dashboard",
      IsExtended: false,
      ParentID: 0,
      MenuID: 12,
    },
  ];
}
