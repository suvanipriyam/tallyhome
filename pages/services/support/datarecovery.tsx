import React from 'react'
import { Navbar } from '@components/Layout/Navbar';
import { Footer } from '@components/Layout/Footer';

import Marquee from "react-fast-marquee";


const datarecovery = () => {
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
          backgroundPosition: "center 14.55px"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>GlowIPS Service Authorized Tally Partners -Delhi</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.php">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    GlowIPS Service Authorized Tally Partners -Delhi
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
                <h2 className="title">Tally Data Recovery Service</h2>
                <p className="p-3">
                  Data of Tally is very vital for every user or company. More serious
                  the user is more vital data becomes. In other words we can say more
                  and more dependence on tally needs more and more care of its data.
                  Although tally has provided many ways to protect you data but one
                  way or other due to some human error or system failure we loose our
                  data. Particularly in case of tally it cripples our day today
                  business.
                </p>
                <p className="p-3">
                  We have to first see why data has got corrupted the ways to recover
                  depends on reason it got corrupted. Here are some tips and tricks
                  which can save you the day. First of all lets see different reasons
                  which can cause data corruption.
                </p>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Why data gets corrupted ?</p>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <p className="p-3">
                            The reason could be anyone of following :-
                          </p>
                          <p className="p-3 ps-5">
                            1. While working on tally power goes off and UPS is unable
                            to give you backup. Next time you would open tally the
                            company in which you were working would get corrupted.
                          </p>
                          <p className="p-3 ps-5">
                            2. The computer on which you are working is not operative
                            and OS is not working properly. Somebody formatted it !!
                          </p>
                          <p className="p-3 ps-5">
                            3. You have taken so many backups by copying the tally
                            folder in so many placed that you forgot which was to
                            original one.
                          </p>
                          <p className="p-3 ps-5">
                            4. You have taken a backup and when you try to restore it
                            your data is washed out.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <img
                            src="assets/images/tally_data_recovery_glowIPS_delhi.jpg"
                            alt="Tally Academy Glow IPS-Delhi"
                            width="100%"
                            style={{ filter: "invert(0)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Solutions</p>
                      </div>
                      <p className="p-3">
                        Our Technical Team will provide you complete recovery of your
                        Tally data, whether from your Hard Disk or Tally Systems . We
                        have complete tools and procedures to recover your data .
                        Clients are required to provide us the complete folder for
                        data recovery..
                      </p>
                      <p className="p-3">
                        The services are provided with AMC , debugging and migrations
                        of multi recovery at a genuine price. We follow our company
                        policy or recover and destroy ,i.e we do not share or keep
                        external data in our Database for any unethical practice.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Some healthy tips can also save you the day.</p>
                      </div>
                      <p className="p-3">
                        Take backup on regular basis make it a habit to take backup
                        when ever you have done enough work. The frequency of backup
                        always depends on how much work you do one daily basis or how
                        much work you can afford to do again!!
                      </p>
                      <p className="p-3">
                        Take backup on the basis of name of days or name of month. If
                        data is high then the backup destination can be like this
                        d:\tallybackup\Monday or d:\tallybackup\Tuesday and so on. In
                        this way you would get seven backups and all backups cannot be
                        corrupted. If data volume is low then backup can be taken as
                        d:\tallybackup\June if you can afford to do one months task in
                        a single streach.
                      </p>
                      <p className="p-3">
                        Try to make minimum companies. It would save you lots of
                        hassles.
                      </p>
                      <p className="p-3">
                        There should be only one Tally version and one Tally folder.
                        Too many versions and folders multiplies your work. If you are
                        two versions then try to sum up work in latest version as soon
                        as possible.
                      </p>
                      <p className="p-3">
                        There must be proper power backup while working on tally. In
                        network environment is a must on all nodes where tally is
                        working.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <h2 className="title">
                      Common Data Corruption Problem &amp; Solutions
                    </h2>
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally does not respond while opening of a Company ?</p>
                      </div>
                      <p className="p-3">
                        One of the reason is, Tally Data files are set to read only,
                        normally happens when data is copied from one time writable
                        media like CD/DVD.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Exiting Tally Error - File Damaged TranMgr.900 ?</p>
                      </div>
                      <div className="row flex-direction-reverse">
                        <div className="col-md-8">
                          <p className="p-3">
                            Transaction Manager file can get damaged/corrupted due to
                            power failure or bad sector. We can repair such file
                            manually, 100% data recovery can be possible depends upon
                            the condition of TranMgr.900 file.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <img
                            src="assets/images/tally_eror_tranmngr900_glowips.PNG"
                            alt="Tally Data Recovery Glow IPS"
                            style={{ filter: "invert(0)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Exiting Tally Error - File Size Position Char ?</p>
                      </div>
                      <div className="row flex-direction-reverse">
                        <div className="col-md-8">
                          <p className="p-3">
                            Some particular Transaction file can get damaged /
                            corrupted due to power failure or bad sector. We can
                            repair such file manually, Except some voucher entries,
                            remaining data recovery is possible.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <img
                            src="assets/images/File_Size_Position_Chars.PNG"
                            alt="Tally Data Recovery Glow IPS"
                            style={{ filter: "invert(0)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>
                          Exiting Tally Error - Internel Error - Memory Access
                          Violation ?
                        </p>
                      </div>
                      <div className="row flex-direction-reverse">
                        <div className="col-md-8">
                          <p className="p-3">
                            Internal Error - Memory Access Violation problem can of
                            various reasons.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <img
                            src="assets/images/Exiting Tally Error - Internel Error - Memory Access Violation.PNG"
                            alt="Tally Data Recovery Glow IPS"
                            style={{ filter: "invert(0)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Exiting Tally Error - File Not Found ?</p>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <p className="p-3">
                            File missing problem can be due to accidental deletion of
                            any file. Problem can be solved, but 100% data recovery is
                            not possible.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <img
                            src="assets/images/Exiting Tally Error - File Not Found.PNG"
                            alt="Tally Data Recovery Glow IPS"
                            style={{ filter: "invert(0)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Exiting Tally Error - File Damaged Manager.500 ?</p>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <p className="p-3">
                            Corruption of Manager.500 or Manager.900 can be due to
                            power failure or bad sector. Very difficult to reconstruct
                            your Manager file, because it contains all your Master
                            Information, but data can be recovered.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <img
                            src="assets/images/Exiting Tally Error - File Damaged Manager.500.PNG"
                            alt="Tally Data Recovery Glow IPS"
                            style={{ filter: "invert(0)" }}
                          />
                        </div>
                      </div>
                    </div>
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

export default datarecovery