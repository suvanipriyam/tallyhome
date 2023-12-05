import React from 'react'
import { Navbar } from '@components/Layout/Navbar';
import { Footer } from '@components/Layout/Footer';

import Marquee from "react-fast-marquee";
import clientage from './clientage';



const projects = () => {
  return (
    <div>
      <Navbar />
      

      <section
  className="page-title parallaxie"
  data-bg-img="https://www.tallysolution.net/assets/images/08.jpg"
  style={{
    backgroundImage: 'url("https://www.tallysolution.net/assets/images/08.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center 44.79px"
  }}
>
  <div className="container">
    <div className="row">
      <div className="col">
        <h1>Tallyerp 9 Featured Projects</h1>
        <nav aria-label="breadcrumb" className="page-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.php">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tallyerp 9 Featured Projects
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>


<Marquee className="theme-bg marqueeData">
        <h1>
          Top Tally Solutions Dealers and Partners across New Delhi - Gurgaon - Noida - Faridabad - NCR | Tally
          Software Dealers and Solution Provides - Across New Delhi - NCR - Gurgaon - Noida
        </h1>
      </Marquee>

      <section className="pb-3">
  <div className="container">
    <div className="row justify-content-center flex-flow-row-reverse">
      <div className="col-md-4">
        <div className="tab-head">
          <h4 className="service-head mb-0">Tally Products</h4>
          <div id="accordion" className="accordion tabArea">
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">
                  <a
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse1"
                    aria-expanded="false"
                    className="collapsed"
                  >
                    Tally ERP 9
                  </a>
                </h6>
              </div>
              <div
                id="collapse1"
                className="collapse ps-3"
                data-bs-parent="#accordion"
                style={{}}
              >
                <div className="card">
                  <div className="card-header">
                    <h6 className="mb-0">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-parent="#collapse1"
                        href="#collapse1_1"
                        aria-expanded="false"
                        className="collapsed"
                      >
                        Functions &amp; Features
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse1_1"
                    className="collapse ps-3"
                    data-bs-parent="#collapse1"
                    style={{}}
                  >
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Accounting-glowips-delhi.php"
                          className="collapsed"
                        >
                          Accounting
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Financial-Management-Control-glowips-delhi.php"
                          className="collapsed"
                        >
                          Financial Management &amp; Control
                        </a>
                      </h6>
                    </div>
                    <div className="card-header ms-3">
                      <h6 className="mb-0">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-parent="#collapse1_1"
                          href="#collapse1_1_1"
                          aria-expanded="false"
                          className="collapsed"
                        >
                          Inventory
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse1_1_1"
                      className="collapse ps-3"
                      data-bs-parent="#collapse1_1"
                      style={{}}
                    >
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Inventory-Accounting-Management-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Inventory Accounting &amp; Management
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Batch-Vouchers-Report-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Batch Vouchers Report
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="card-header ms-3">
                      <h6 className="mb-0">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-parent="#collapse1_1"
                          href="#collapse1_1_2"
                          aria-expanded="false"
                          className="collapsed"
                        >
                          Purchases &amp; Payables
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse1_1_2"
                      className="collapse ps-3"
                      data-bs-parent="#collapse1_1"
                      style={{}}
                    >
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Stock-Query-From-Invoice-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Stock Query From Invoice
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="card-header ms-3">
                      <h6 className="mb-0">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-parent="#collapse1_1"
                          href="#collapse1_1_3"
                          aria-expanded="false"
                          className="collapsed"
                        >
                          Sales &amp; Receivables
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse1_1_3"
                      className="collapse ps-3"
                      data-bs-parent="#collapse1_1"
                      style={{}}
                    >
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Stock-Query-From-Invoice-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Stock Query from Invoice
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Sales-&-Receivables-Mass-Emailing-Communicating-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Mass Emailing - Communicating
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Point-of-Sale-tallyerp-9-glowips-delhi.php"
                          className="collapsed"
                        >
                          Point of Sale
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Manufacturing-tallyerp-9-glowips-delhi.php"
                          className="collapsed"
                        >
                          Manufacturing{" "}
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Costing-tallyerp-9-glowips-delhi.php"
                          className="collapsed"
                        >
                          Costing{" "}
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Job-Costing-tallyerp-9-glowips-delhi.php"
                          className="collapsed"
                        >
                          Job Costing{" "}
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Payroll-tallyerp-9-glowips-delhi.php"
                          className="collapsed"
                        >
                          Payroll{" "}
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Branch-Management-tallyerp-9-glowips-delhi.php"
                          className="collapsed"
                        >
                          Branch Management{" "}
                        </a>
                      </h6>
                    </div>
                    <div className="card-header ms-3">
                      <h6 className="mb-0">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-parent="#collapse1_1"
                          href="#collapse1_1_4"
                          aria-expanded="false"
                          className="collapsed"
                        >
                          Data Synchronisation
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse1_1_4"
                      className="collapse ps-3"
                      data-bs-parent="#collapse1_1"
                      style={{}}
                    >
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="One-way-Synchronisation-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            One way Synchronisation
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Selective-Synchronisation-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Selective Synchronisation
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Synchronisation-After-Save-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Synchronisation After Save
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Multiple-Rule-Synchronisation-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Multiple Rule Synchronisation
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="EnterpriseandBeyond-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Enterprise and Beyond
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Synch-with-Voucher-20Ordering-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Synch with "Voucher Ordering
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Opening-Balance-Control-Data-Synchronisation-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Opening Balance Control
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="card-header ms-3">
                      <h6 className="mb-0">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-parent="#collapse1_1"
                          href="#collapse1_1_5"
                          aria-expanded="false"
                          className="collapsed"
                        >
                          Statutory Compliance
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse1_1_5"
                      className="collapse ps-3"
                      data-bs-parent="#collapse1_1"
                      style={{}}
                    >
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Central-Sales-Tax(CST)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            CST
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Value-Added-Tax-20(VAT)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            VAT
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Service-Tax-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Service Tax
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="TaxDeductedatSource(TDS)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            TDS
                          </a>
                        </h6>
                      </div>
                      <div className="card-header ms-3">
                        <h6 className="mb-0">
                          <a
                            data-bs-toggle="collapse"
                            data-bs-parent="#collapse1_5"
                            href="#collapse1_1_6_1"
                            aria-expanded="false"
                            className="collapsed"
                          >
                            Excise for Manufacturers
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapse1_1_6_1"
                        className="collapse ps-3"
                        data-bs-parent="#collapse1_5"
                        style={{}}
                      >
                        <div className="card-header1">
                          <h6 className="mb-0">
                            <a
                              href="Multi-Page-Invoice-Printing-Excise-for-Manufacturers(CENVAT)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                              className="collapsed"
                            >
                              Multi-Page Invoice Printing
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Excise%20for%20Dealers-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Excise for Dealers
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="TaxCollectedatSource(TCS)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            TCS
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="FringeBenefitTax(FBT)-Statutory-Compliance-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            FBT
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="card-header ms-3">
                      <h6 className="mb-0">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-parent="#collapse1_1"
                          href="#collapse1_1_7"
                          aria-expanded="false"
                          className="collapsed"
                        >
                          Special Needs
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapse1_1_7"
                      className="collapse ps-3"
                      data-bs-parent="#collapse1_1"
                      style={{}}
                    >
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Multi-company-Special-Needs-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Multi-Company
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Multi-Period-Special-Needs-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Multi-Period
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Multi-Cost-Profit%20Centres-Special-Needs-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Multi-Cost/Profit Centres
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Multi-Currency-Centres-Special-Needs-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Multi-Currency
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Multi-Units-Centres-Special-Needs-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Multi-Units
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Multi-Location-Inventory-Special-Needs-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            {" "}
                            Multi-Location Inventory
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Multi-Budgets-&-Scenarios-Special-Needs-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Multi-Budgets &amp; Scenarios
                          </a>
                        </h6>
                      </div>
                      <div className="card-header1">
                        <h6 className="mb-0">
                          <a
                            href="Multilingual-Special-Needs-tallyerp-9-glowips-delhi.php"
                            className="collapsed"
                          >
                            Multilingual
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Security-and-Access-Control-tallyerp-9-glowips-delhi.php"
                          className="collapsed"
                        >
                          Security &amp; Access Control
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Remote-Access-Control-tallyerp-9-glowips-delhi.php"
                          className="collapsed"
                        >
                          Remote Access
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Remote-Edit-tallyerp-9-glowips-delhi.php"
                          className="collapsed"
                        >
                          Remote Edit
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="card-header">
                    <h6 className="mb-0">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-parent="#collapse1"
                        href="#collapse1_2"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        Editions Available
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse1_2"
                    className="collapse"
                    data-bs-parent="#collapse1"
                    style={{}}
                  >
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="silver_Edition_SingleUser-Glowips_delhi.php"
                          className="collapsed"
                        >
                          Silver Edition - Single User
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Gold-Edition-Unlimited-Multi-User-Glowips_delhi.php"
                          className="collapsed"
                        >
                          Gold Edition - Unlimited Multi - User
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally_ERP9-Auditors_Edition-Glowips_delhi.php"
                          className="collapsed"
                        >
                          Tally.ERP 9 - Auditors' Edition
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="card-header">
                    <h6 className="mb-0">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-parent="#collapse1"
                        href="#collapse1_3"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        Upgrades &amp; Migration
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse1_3"
                    className="collapse"
                    data-bs-parent="#collapse1"
                    style={{}}
                  >
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Upgrades-Migration-glowips.php"
                          className="collapsed"
                        >
                          Upgrading from prior Versions
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="MigratingfromotherProducts-glowips.php"
                          className="collapsed"
                        >
                          Migrating from other Products
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="card-header">
                    <h6 className="mb-0">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-parent="#collapse1"
                        href="#collapse1_4"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        Product Roadmap
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse1_4"
                    className="collapse"
                    data-bs-parent="#collapse1"
                    style={{}}
                  >
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a href="#" className="collapsed">
                          Series A
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a href="#" className="collapsed">
                          Series B
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a href="#" className="collapsed">
                          Series C
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a href="#" className="collapsed">
                          Price List
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">
                  <a
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse2"
                    className="collapsed"
                    aria-expanded="false"
                  >
                    Tally .ERP 9 - Auditors' Edition
                  </a>
                </h6>
              </div>
              <div
                id="collapse2"
                className="collapse"
                data-bs-parent="#accordion"
                style={{}}
              >
                <div className="card-header1">
                  <h6 className="mb-0">
                    <a
                      href="Benefits-at-a-glance-about-tally-erp9-Auditor-edition.php"
                      className="collapsed"
                    >
                      Benefits at a glance
                    </a>
                  </h6>
                </div>
                <div className="card-header ms-3">
                  <h6 className="mb-0">
                    <a
                      data-bs-toggle="collapse"
                      data-bs-parent="#collapse2"
                      href="#collapse2_1"
                      className="collapsed"
                      aria-expanded="false"
                    >
                      Statutory Audit
                    </a>
                  </h6>
                </div>
                <div
                  id="collapse2_1"
                  className="collapse ms-3"
                  data-bs-parent="#collapse2"
                  style={{}}
                >
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Data-20Analysis-about-tally-erp9-Auditor-edition.php"
                        className="collapsed"
                      >
                        Data Analysis
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a href="#" className="collapsed">
                        Auditing
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="card-header ms-3">
                  <h6 className="mb-0">
                    <a
                      data-bs-toggle="collapse"
                      data-bs-parent="#collapse2"
                      href="#collapse2_2"
                      className="collapsed"
                      aria-expanded="false"
                    >
                      Quick Tax Setup
                    </a>
                  </h6>
                </div>
                <div
                  id="collapse2_2"
                  className="collapse ms-3"
                  data-bs-parent="#collapse2"
                  style={{}}
                >
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Quick-Tax-Setup-Schedule-VI-about-tally-erp9-Auditor-edition.php"
                        className="collapsed"
                      >
                        Schedule VI
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="card-header1 ms-3">
                  <h6 className="mb-0">
                    <a href="" className="collapsed">
                      Schedule a demo
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">
                  <a
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse3"
                    className="collapsed"
                    aria-expanded="false"
                  >
                    Tally Shoper 9
                  </a>
                </h6>
              </div>
              <div
                id="collapse3"
                className="collapse"
                data-bs-parent="#accordion"
                style={{}}
              >
                <div className="card-header ms-3">
                  <h6 className="mb-0">
                    <a
                      data-bs-toggle="collapse"
                      data-bs-parent="#collapse3"
                      href="#collapse3_1"
                      className="collapsed"
                      aria-expanded="false"
                    >
                      Components
                    </a>
                  </h6>
                </div>
                <div
                  id="collapse3_1"
                  className="collapse ms-3"
                  data-bs-parent="#collapse3"
                  style={{}}
                >
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Shoper9HO-Tally-Shoper-features-details.php"
                        className="collapsed"
                      >
                        Shoper 9 HO
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Shoper9-POS-Distributor-Tally-Shoper-features-details.php"
                        className="collapsed"
                      >
                        Shoper 9 POS/Distributor
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Shoper9-Product%20Editions-Tally-Shoper-features-details.php"
                        className="collapsed"
                      >
                        Shoper 9 - Product Editions
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="card-header ms-3">
                  <h6 className="mb-0">
                    <a
                      data-bs-toggle="collapse"
                      data-bs-parent="#collapse3"
                      href="#collapse3_2"
                      className="collapsed"
                      aria-expanded="false"
                    >
                      Functionality
                    </a>
                  </h6>
                </div>
                <div
                  id="collapse3_2"
                  className="collapse ms-3"
                  data-bs-parent="#collapse3"
                  style={{}}
                >
                  <div className="card-header ms-3">
                    <h6 className="mb-0">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-parent="#collapse3_2"
                        href="#collapse3_2_1"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        Inventory Management
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse3_2_1"
                    className="collapse ms-3"
                    data-bs-parent="#collapse3_2"
                    style={{}}
                  >
                    <div className="card-header1 ms-3">
                      <h6 className="mb-0">
                        <a
                          href="Stock-Taking-Inventory-Management-Functionality-Tally-Shoper-features-details.php"
                          className="collapsed"
                        >
                          Stock Taking
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="card-header ms-3">
                    <h6 className="mb-0">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-parent="#collapse3_2"
                        href="#collapse3_2_2"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        Catalogue Management
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse3_2_2"
                    className="collapse ms-3"
                    data-bs-parent="#collapse3_2"
                    style={{}}
                  >
                    <div className="card-header1 ms-3">
                      <h6 className="mb-0">
                        <a
                          href="Sales-Promotions-Catalogue-Management-Functionality-Tally-Shoper-features-details.php"
                          className="collapsed"
                        >
                          Sales Promotions
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="card-header ms-3">
                    <h6 className="mb-0">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-parent="#collapse3_2"
                        href="#collapse3_2_3"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        Configurability
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse3_2_3"
                    className="collapse ms-3"
                    data-bs-parent="#collapse3_2"
                    style={{}}
                  >
                    <div className="card-header1 ms-3">
                      <h6 className="mb-0">
                        <a
                          href="Configurability-Functionality-Tally-Shoper-features-details.php"
                          className="collapsed"
                        >
                          Tally.ERP 9 Interface
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="card-header ms-3">
                    <h6 className="mb-0">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-parent="#collapse3_2"
                        href="#collapse3_2_4"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        Flow of Goods and Information
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse3_2_4"
                    className="collapse ms-3"
                    data-bs-parent="#collapse3_2"
                    style={{}}
                  >
                    <div className="card-header1 ms-3">
                      <h6 className="mb-0">
                        <a
                          href="Comprehensive-Data-Synchronisation-Data-FlowofGoodsandInformation-Functionality-Tally-Shoper-features-details.php"
                          className="collapsed"
                        >
                          Comprehensive Data Synchronisation
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="card-header ms-3">
                    <h6 className="mb-0">
                      <a
                        data-bs-toggle="collapse"
                        data-bs-parent="#collapse3_2"
                        href="#collapse3_2_5"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        Management Reports
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse3_2_5"
                    className="collapse ms-3"
                    data-bs-parent="#collapse3_2"
                    style={{}}
                  >
                    <div className="card-header1 ms-3">
                      <h6 className="mb-0">
                        <a
                          href="SalesandStockReport-Management-Reports-Functionality-Tally-Shoper-features-details.php"
                          className="collapsed"
                        >
                          Sales and Stock Report
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="card-header ms-3">
                  <h6 className="mb-0">
                    <a
                      data-bs-toggle="collapse"
                      data-bs-parent="#collapse3"
                      href="#collapse3_3"
                      className="collapsed"
                      aria-expanded="false"
                    >
                      Technology
                    </a>
                  </h6>
                </div>
                <div
                  id="collapse3_3"
                  className="collapse ms-3"
                  data-bs-parent="#collapse3"
                  style={{}}
                >
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Hardware_Tally_Technology_tally_shoper.php"
                        className="collapsed"
                      >
                        Hardware
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="DevicesSupported_Tally_Technology_tally_shoper.php"
                        className="collapsed"
                      >
                        {" "}
                        Devices Supported
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Architecture_Tally_Technology_tally_shoper.php"
                        className="collapsed"
                      >
                        Architecture
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Customization of Shoper 9_Tally_Technology_tally_shoper.php"
                        className="collapsed"
                      >
                        Customisation
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Shoper 9 Interfaces_Tally_Technology_tally_shoper.php"
                        className="collapsed"
                      >
                        {" "}
                        Interfaces
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Store Templates_Tally_Technology_tally_shoper.php"
                        className="collapsed"
                      >
                        {" "}
                        Store Templates
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Custom Installer_Tally_Technology_tally_shoper.php"
                        className="collapsed"
                      >
                        {" "}
                        Custom Installer
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Live Update_Tally_Technology_tally_shoper.php"
                        className="collapsed"
                      >
                        {" "}
                        Live Update
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">
                  <a
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapse4"
                    className="collapsed"
                    aria-expanded="false"
                  >
                    Tally Developer
                  </a>
                </h6>
              </div>
              <div
                id="collapse4"
                className="collapse"
                data-bs-parent="#accordion"
                style={{}}
              >
                <div className="card-header1 ms-3">
                  <h6 className="mb-0">
                    <a
                      href="The%20Development%20PlatformTDL_tally_developer.php"
                      className="collapsed"
                    >
                      Tally Developer - TDL
                    </a>
                  </h6>
                </div>
                <div className="card-header1 ms-3">
                  <h6 className="mb-0">
                    <a
                      href="The%20Development%20PlatformTDL_tally_developer.php"
                      className="collapsed"
                    >
                      The Development Platform
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header1">
                <h6 className="mb-0">
                  <a
                    href="tally-erp9-software-on-rent.php"
                    className="collapsed"
                  >
                    Tally ERP-9 Rental
                  </a>
                </h6>
              </div>
              <div className="card-header1">
                <h6 className="mb-0">
                  <a
                    href="tally-erp9-software-quotation.php"
                    className="collapsed"
                  >
                    Our Quotation
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-head">
          <h4 className="service-head mb-0">Tally Products</h4>
          <div id="accordion" className="accordion tabArea">
            {/*<div class="card-header1">*/}
            {/*  <h6 class="mb-0">*/}
            {/*    <a href="tally-erp9-software-quotation.php" class="collapsed">Our Quotation</a>*/}
            {/*  </h6>*/}
            {/*</div>*/}
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="Tally-Customization-Solution-Delhi-India-International.php"
                  className="collapsed"
                >
                  Customization Services
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="Tally-Corporate-Training-Unit-Delhi-NCR-India-International.php"
                  className="collapsed"
                >
                  Tally Corporate Training
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="Tally-Subscription-Renewal-Services-Delhi-NCR-India-International.php"
                  className="collapsed"
                >
                  Tally.Net Services
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="Tally-ERP-Business-Advisory-Services.php"
                  className="collapsed"
                >
                  Business Advisory Services
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="Tally-AMC-Services-Delhi-NCR-India-International.php"
                  className="collapsed"
                >
                  {" "}
                  Annual Support Cover
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="Tally-Synchronization-Solutions-Delhi-NCR-India-International.php"
                  className="collapsed"
                >
                  {" "}
                  Data Synchronization
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="Tally-Support-Unit-Delhi-Ncr-India-International.php"
                  className="collapsed"
                >
                  Priority Tally Support
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="tab-head">
          <h4 className="service-head mb-0">Useful Links</h4>
          <div id="accordion" className="accordion tabArea">
            <div className="card-header1">
              <h6 className="mb-0">
                <a href="Tally-Solutions-Unit.php" className="collapsed">
                  Tally Academy Solution
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="Corporate-Management-Services-India-International.php"
                  className="collapsed"
                >
                  Corporate Management
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="Tally-Vertical-Solutions-Authorized-Development-Unit.php"
                  className="collapsed"
                >
                  Vertical Solutions for Tally{" "}
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="Tally-Integration-Services-Delhi-NCR-India-International.php"
                  className="collapsed"
                >
                  Tally Integration
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a
                  href="glowips-tallyerp-9-customers.php"
                  className="collapsed"
                >
                  Our Esteemed Clientage
                </a>
              </h6>
            </div>
            <div className="card-header1">
              <h6 className="mb-0">
                <a href="instantsupport.php" className="collapsed">
                  Instant Support
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="tab-head">
          <h4 className="service-head mb-0">Ask for a service</h4>
          <div className="tabArea">
            <form
              id="contact-form"
              className="row"
              method="post"
              action=""
            >
              <div className="form-group col-md-12 has-error has-danger">
                <input
                  id="form_name"
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="First Name"
                  data-error="Name is required."
                />
              </div>
              <div className="form-group col-md-12 has-error has-danger">
                <input
                  id="form_name"
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="Mobile No."
                  data-error="Mobile is required."
                />
              </div>
              <div className="form-group col-md-12 has-error has-danger">
                <input
                  id="form_name"
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="Email"
                  data-error="Email is required."
                />
              </div>
              <div className="form-group col-md-12 has-error has-danger">
                <input
                  id="form_name"
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="City"
                  data-error="City is required."
                />
              </div>
              <div className="form-group col-md-12 has-error has-danger">
                <input
                  id="form_name"
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="Message"
                  data-error="Message is required."
                />
              </div>
              <div className="col-md-12 text-center mt-4 mb-3">
                <button className="btn">
                  <span>Send Messages</span>
                </button>
              </div>
            </form>
          </div>
        </div>{" "}
      </div>
      <div className="col-lg-8 col-md-8">
        <div className="section-title">
          <h2 className="title">Feature Projects</h2>
          <div className="d-sm-flex bg-white box-shadow p-4 mb-5">
            <div className="flex-grow-1 ms-sm-4 mt-4 mt-sm-0">
              <h6 className="font-w-6">Minda Group</h6>
              <div className="d-flex align-items-end">
                <img
                  className="img-fluid rounded-circle box-shadow"
                  alt="image"
                  src="https://www.tallysolution.net/assets/images/project_slide1.jpg"
                  style={{ filter: "invert(0)" }}
                />
                <p>
                  The company NK MINDA Group is one of the leading global
                  manufacturers of automobile components and a leading supplier
                  of proprietary automotive solutions to Original Equipment
                  Manufacturers (OEMs). For nearly five decades, N K Minda Group
                  has{" "}
                </p>
              </div>
              <p>
                been supplying the automotive industry with innovative
                engineered products that are efficient, safe, responsive and
                enhance comfort levels. The Company Invested in Tally ERP-9
                Systems to Upgrade and organize their Payroll Management and to
                cover there all mismanagement in Manpower Sector. We
                successfully Implemented and customized the system at their Unit
                with Dedicated Corporate trainings and Implementations{" "}
              </p>
            </div>
          </div>
          <div className="d-sm-flex bg-white box-shadow p-4 mb-5">
            <div className="flex-grow-1 ms-sm-4 mt-4 mt-sm-0">
              <h6 className="font-w-6">
                Safegate Airport Systems India Pvt Ltd
              </h6>
              <div className="d-flex align-items-end">
                <img
                  className="img-fluid rounded-circle box-shadow"
                  alt="image"
                  src="https://www.tallysolution.net/assets/images/safeguard.jpeg"
                  style={{ filter: "invert(0)" }}
                />
                <p>
                  Safegate Group is an international company with headquarters
                  in Malmö, Sweden and representatives in more than 50 countries
                  around the world. The main objective for Safegate Group is to
                  provide the airport industry with efficient solutions for more
                  and safer aircraft movements. The solutions include
                </p>
              </div>
              <p>
                operations, control and handling of aircraft on the ground,
                airborne aircraft close to the airport and ground vehicles at
                the airport. As a result of dedicated research and development
                throughout the years Safegate Group is today considered a
                specialist in its field of business. Our Unit provided them
                intensive training on the ERP Part and Project Accountings ,
                Complete Implementations , Integration and Other Structural
                Modifications were carried out to suit the requirement of the
                organization.
              </p>
            </div>
          </div>
          <div className="d-sm-flex bg-white box-shadow p-4 mb-5">
            <div className="flex-grow-1 ms-sm-4 mt-4 mt-sm-0">
              <h6 className="font-w-6">Panasonic India Pvt Ltd</h6>
              <div className="d-flex align-items-end">
                <img
                  className="img-fluid rounded-circle box-shadow"
                  alt="image"
                  src="https://www.tallysolution.net/assets/images/panasonic.jpeg"
                 
                />
                <p>
                  Headquartered in Osaka, Japan, Panasonic Corporation is a
                  leading global manufacturer of electronic products and
                  solutions for consumer, business and industrial needs.
                  Panasonic uses innovative technologies to provide solutions,
                  not just products, to make everyday home and business life
                  simpler,{" "}
                </p>
              </div>
              <p>
                convenient and energy efficient. With a clear vision to become
                the number 1 Green Innovation company in the worldwide
                electronics industry by year 2018, Panasonic strongly believes
                in designing products and solutions keeping the environment in
                mind. Under its global Eco Ideas umbrella, the company develops
                energy-efficient, state-of-the-art products and encourages
                customers to live eco-conscious lifestyles with an aim to reduce
                carbon emissions in households and manufacturing units.
              </p>
              <p>
                Our Company GLOWIPS Provided them dedicated Technical Support in
                Tally ERP-9 Systems and Integration capabilities with various
                Solutions to implement from SAP – Tally ( 2 way Bridge ).
              </p>
            </div>
          </div>
          <div className="d-sm-flex bg-white box-shadow p-4 mb-5">
            <div className="flex-grow-1 ms-sm-4 mt-4 mt-sm-0">
              <h6 className="font-w-6">Bioworld Merchandizing</h6>
              <div className="d-flex align-items-end">
                <img
                  className="img-fluid rounded-circle box-shadow"
                  alt="image"
                  src="https://www.tallysolution.net/assets/images/bioworld.jpeg"
               
                />
                <p>
                  At Bioworld, we make stuff – all kinds of stuff. That’s right,
                  you might have thought we were a pharmaceutical or petroleum
                  company, but we are not. Although we do generate innovation,
                  ignite growth, and constantly evolve, we are not your
                  traditional laboratory. Bioworld is the strategic brand
                  identity{" "}
                </p>
              </div>
              <p>
                optimization partner. Call us trend scientists, brand
                ambassadors or product specialists. We have multiple labs filled
                with experts who are immersed in the lifestyle of the brands we
                develop. At Bioworld, we incubate licensed and private-label
                brands, massive, award-winning brands that are enriched with
                strategy, design, and marketplace execution.
              </p>
              <p>
                Our Team Successfully implemented Tally ERP-9 Systems at their
                sites and also provided customization solutions (processing) ,
                varied Technical Support was provided .
              </p>
            </div>
          </div>
          <div className="d-sm-flex bg-white box-shadow p-4 mb-5">
            <div className="flex-grow-1 ms-sm-4 mt-4 mt-sm-0">
              <h6 className="font-w-6">Contec Global</h6>
              <div className="d-flex align-items-end">
                <img
                  className="img-fluid rounded-circle box-shadow"
                  alt="image"
                  src="https://www.tallysolution.net/assets/images/contec.jpeg"
                
                />
                <p>
                  stablished in 1984 and headquartered in London, the Contec
                  Global Group has a worldwide presence, with operations in
                  Asia, Africa, Europe and America. As a company established on
                  the platform of e-Governance and smart technologies, Contec
                  Global is amongst the most experienced independent
                </p>
              </div>
              <p>
                echnology and systems organizations operating in developing
                countries. Today, the Group is engaged, globally, in providing
                integrated, systems-based solutions in the fields of Energy,
                Secure Technologies, Infrastructure and Hospitality.
              </p>
              <p>
                Our experience working on large-scale security solutions
                projects, as well as our laterally integrated business
                interests, puts us in a unique position to provide seamless,
                end-to-end solutions for mega projects. With our worldwide
                presence and close associations with the governments of nations
                at the very highest levels, Contec Global is uniquely positioned
                to not just initiate and implement mega projects but to also
                influence policy makers on key issues.
              </p>
              <p>
                The Group has vast experience in Africa, which continues to be
                our primary market, with mission critical, large-scale
                operations spanning the continent from Nigeria to Uganda, the
                Republic of Niger, Burundi, Congo DRC and Southern Sudan. In the
                year 2008 however, we are looking to aggressively build our
                presence in the European market through our operations in the
                United Kingdom and Switzerland, as well as in the Middle East
                through our newly forged network of partnerships and strategic
                alliances.
              </p>
              <p>
                Our Unit Successfully Implemented International Tally Systems
                with Complete Synchronization Implementation to their various
                across offices across Globe . We have provided them dedicated
                customization and integration as per enterprise's requirement.{" "}
              </p>
            </div>
          </div>
          <div className="d-sm-flex bg-white box-shadow p-4 mb-5">
            <div className="flex-grow-1 ms-sm-4 mt-4 mt-sm-0">
              <h6 className="font-w-6">
                Pearey Lal and Sons – Escorts, Ashok Leyland Crane Manufactures
              </h6>
              <div className="d-flex align-items-end">
                <img
                  className="img-fluid rounded-circle box-shadow"
                  alt="image"
                  src="https://www.tallysolution.net/assets/images/pearey.jpeg"
                 
                />
                <p>
                  Manufacturers Of Dass Hydros, Dass Jones Diesel Hydraulic
                  Mobile Cranes Hydraulic Products &amp; Equipment , We are
                  manufacturer of heavey earth moving machine.
                </p>
              </div>
              <p>
                Our Team held several meeting with the senior Management and
                provided intensive customized solutions in the Tally ERP-9
                Systems for their organizations work. The Company has several
                offices in Delhi – NCR with high end BOM management and other
                sync capabilities.
              </p>
              <p>
                The work is successfully implemented by us and the project was
                the first ever Manufacturing Customization Module to be
                constructed in Delhi NCR at this colossal scale, managing the
                complete crane operations and other Service Capabilities for the
                Enterprise.
              </p>
            </div>
          </div>
          <div className="d-sm-flex bg-white box-shadow p-4 mb-5">
            <div className="flex-grow-1 ms-sm-4 mt-4 mt-sm-0">
              <h6 className="font-w-6">Maharishi Ayurvedic India Pvt Ltd</h6>
              <div className="d-flex align-items-end">
                <img
                  className="img-fluid rounded-circle box-shadow"
                  alt="image"
                  src="https://www.tallysolution.net/assets/images/maharishi.jpeg"
                
                />
                <p>
                  The origin of Maharishi Ayurveda dates back to 1980, when
                  Maharishi Mahesh Yogi, the founder of Transcendental
                  Meditation began working with India's top three Ayurvedic
                  experts - Dr. V.M. Dwivedi, Dr. B.D. Triguna and Dr. Balaraj
                  Maharishi. Maharishi formed a medical council to create
                  authentic
                </p>
              </div>
              <p>
                herbal formulations according to Ayurvedic texts and also
                established an international network of doctors, clinics and
                schools dedicated to eliminating disease and offering perfect
                health to people worldwide. MAPPL in its entirety, as it is
                today was conceived later under the Maharishi's Global Plan and
                was intended to cater to the rapidly growing demands, also in
                the Indian Market.
              </p>
              <p>
                It is also manufacturing a range of patented products like
                Kasni, Amlant, Raktda, Restone, Livomap, Pirant, Herbonic etc.
                and Classical Products like Asavas, Arishtas, Bhasms and others.
                Today MAPPL products, covering more than 900 formulations, are
                not only distributed all over India, through an extensive
                network of Distributors, but also exported to various countries.
              </p>
              <p>
                MAPPL realizes the need of quality management, as Ayurveda was
                in a prolonged period of hibernation during foreign regimes and
                during this period of hibernation the health needs of the
                society changed greatly. Therefore it is imperative to review
                the concepts of Ayurveda in the light of the changes in health
                care needs and of modern technology so as to make it applicable
                to the changed socioeconomic scenario.
              </p>
              <p>
                The Maharishi Assignment was successfully catered by our unit in
                a span of 2 months, the company deals in Excise and Large No of
                Items with subsequent coding systems . The Co have presence in
                many parts of World, hence the work was implemented by our Unit
                with future sync prospects . The Company Now manages their Tally
                Systems to the best of their out after our Services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




      <Footer />
    </div>
  )
}

export default clientage