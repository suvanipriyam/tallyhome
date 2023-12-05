import { FC, useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { useRouter } from 'next/router'
import { CustomImage } from '@components/Utils/CustomImage'
import classNames from 'classnames'

export const Navbar: FC = () => {
  const router = useRouter()
  const [top, setTop] = useState(false)
  const [hash, setHash] = useState(false)

  const PAGES = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Company',
      link: '/#about',
    },
    {
      name: 'Products',
      link: '/#services',
    },
    {
      name: 'Services',
      link: '/#projects',
    },
    {
      name: 'Solution',
      link: '/#contact',
    },
    {
      name: 'Download',
      link: '/#contact',
    },
    {
      name: 'Contact Us',
      link: '/#contact',
    },
  ]

  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      )
        setTop(true)
      else setTop(false)
    }
  }, [])

  const onUp = () => {
    window.location.href = '#'
  }

  const onClose = () => {
    setHash(!hash)
  }

  return (
    <header id="site-header" className="header header-2">
      <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 justify-content-between">
              <a
                href="#"
                className="navbar-brand logo d-block h-100 d-flex justify-content-center"
              >
                <CustomImage
                  style={{ height: 116, width: 116 }}
                  src={'https://www.tallysolution.net/assets/images/logo.gif'}
                  className="mr-3 h-6 sm:h-9 rounded-md"
                  alt="Navbar Logo"
                />
              </a>
            </div>
            <div className="col-md-10">
              <div className="row  mobo-menu-item">
                <div className="col-md-7">
                  <div className="align-items-center text-center">
                    <span className="om-sai-ram">ॐ साईं राम</span>
                  </div>
                  <div className="row justify-content-center align-items-end">
                    <div className="col-md-8"></div>
                    <div className="col-md-4">
                      <a href="#" target="_blank">
                        <img
                          src="https://www.tallysolution.net/assets/images/tallyinternational.png"
                          className="tally-international-shake"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="social-icons">
                        <ul className="list-inline">
                          <li>
                            <a href="http://www.facebook.com/TallySolution">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.pinterest.com/tallysoftware">
                              <i className="fab fa-pinterest"></i>
                            </a>
                          </li>
                          <li>
                            <a href="http://twitter.com/#!/TALLYSOLUTION">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.linkedin.com/pub/tally-customization-developers-delhi-ncr/38/5b/a7">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="d-flex">
                        <div className="d-flex align-items-end me-3">
                          <i
                            className="flaticon-email pe-2"
                            style={{ fontSize: 25 }}
                          ></i>
                          <div>
                            <h6>Email Us</h6>
                            <a href="mailto:tallyproducts@gmail.com">
                              tallyproducts@gmail.com
                            </a>
                          </div>
                        </div>
                        <div className="d-none d-md-flex align-items-end me-3">
                          <i
                            className="flaticon-phone pe-2"
                            style={{ fontSize: 25 }}
                          ></i>
                          <div>
                            <h6>Call Us</h6>
                            <a href="tel:+919582927928">+91 9582927928</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="topbar-link d-none d-sm-flex align-items-center justify-content-between" />
              <div className="header-wrap">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <nav className="navbar navbar-expand-lg">
                        <div
                          className="collapse navbar-collapse"
                          id="navbarNavDropdown"
                        >
                          <ul className="navbar-nav w-100 justify-content-center">
                            {/* {PAGES.map((nav, index) => (
                              <li key={index} className="nav-item">
                                <Link
                                  href={nav.link}
                                  className="nav-link"
                                >
                                  {nav.name}
                                </Link>
                              </li>
                            ))} */}
                            <ul className="navbar-nav w-100 justify-content-center">
                              <li>
                                <img
                                  src="assets/images/logo.gif"
                                  alt=""
                                  className="fixed-logo"
                                  style={{ filter: 'invert(0)' }}
                                />
                              </li>
                              <li className="nav-item">
                                {' '}
                                <a className="nav-link" href="/">
                                  Home
                                </a>
                              </li>
                              <li className="nav-item dropdown">
                                {' '}
                                <a
                                  className="nav-link dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <span>Company</span>
                                </a>
                                <div className="dropdown-menu">
                                  <ul className="list-unstyled">
                                    <li>
                                      <a href="/company/about">About Us</a>
                                    </li>
                                    <li className="dropdown dropdown-submenu">
                                      {''}
                                      <a
                                        href="./company/glowIps"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span> GLOWIPS Team</span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="/company/associates">
                                            Our Associates
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>Customers</span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="/company/projects">
                                            Featured Projects
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/company/clientage">
                                            Our Esteemed Clientage{' '}
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="nav-item dropdown">
                                {' '}
                                <a
                                  className="nav-link dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                >
                                  Products
                                </a>
                                <div className="dropdown-menu">
                                  <ul className="list-unstyled">
                                    <li>
                                      <a href="/products/erp9">Tally .ERP 9</a>
                                    </li>
                                    <li>
                                      <a href="/products/erp9auditors">
                                        Tally .ERP 9 - Auditors' Edition
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/shoper9">
                                        Tally Shoper 9
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/developer">
                                        Tally Developer
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/erp9rental">
                                        Tally ERP-9 Rental
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/quotation">
                                        Our Quotations
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="nav-item dropdown">
                                {' '}
                                <a
                                  className="nav-link dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                >
                                  Services
                                </a>
                                <div className="dropdown-menu">
                                  <ul className="list-unstyled">
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>Tally Academy</span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="/services/training/site">
                                            Tally Training at Site
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/services/training/academy">
                                            Tally Training at Academy
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>Priority Tally Support</span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="/services/support/datarecovery">
                                            Tally Data Recovery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/services/support/passwordrecovery">
                                            Tally Password Recovery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/services/support/datamigration">
                                            Data Migration
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>Implementation Service</span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="/services/implementation/incremental">
                                            Incremental Implementation
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/services/implementation/target">
                                            Target Implementation
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>Customization Service</span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="/services/customization/invoice">
                                            Invoice Customization
                                          </a>
                                        </li>
                                        <li className="dropdown dropdown-submenu">
                                          <a
                                            href="#"
                                            className="dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                          >
                                            Module Customization
                                          </a>
                                          <ul className="dropdown-menu">
                                            <li>
                                              <a
                                                href="/services/customization/module/deluxeerp"
                                                target="_blank"
                                              >
                                                Our Deluxe ERP Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/autoparts"
                                                target="_blank"
                                              >
                                                Auto Part No/ Alias Creation
                                                Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/autobatch"
                                                target="_blank"
                                              >
                                                Auto Batch No Module
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#">
                                                Sales Register Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/masterdeletion"
                                                target="_blank"
                                              >
                                                Master Deletion Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/enhancedreporting"
                                                target="_blank"
                                              >
                                                Enhanced Reporting Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/erpreporting"
                                                target="_blank"
                                              >
                                                ERP Reporting Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/labelprinting"
                                                target="_blank"
                                              >
                                                Label Printing Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/monthwise"
                                                target="_blank"
                                              >
                                                Month Wise Outstanding Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/multipleemail"
                                                target="_blank"
                                              >
                                                Multiple Email Setting Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/partywise"
                                                target="_blank"
                                              >
                                                Party Wise Discount Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/purchaserequisition"
                                                target="_blank"
                                              >
                                                Purchase Requisition Module
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/services/customization/module/voucherapproval"
                                                target="_blank"
                                              >
                                                Voucher Approval Module
                                              </a>
                                            </li>
                                          </ul>
                                        </li>
                                        <li>
                                          <a href="/services/customization/dedicated">
                                            Dedicated Customization
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="/services/corporatetraining">
                                        Tally Corporate Training
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/services/supportcover">
                                        Annual Support Cover
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/services/netsubscription">
                                        Tally .Net Subscription
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/services/syncimplementaion">
                                        Synchronization Implementation
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/services/advisoryservices">
                                        Business Advisory Services
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/services/placement">
                                        Placement
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="nav-item dropdown">
                                {' '}
                                <a
                                  className="nav-link dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                >
                                  Solution
                                </a>
                                <div className="dropdown-menu">
                                  <ul className="list-unstyled">
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>
                                          Vertical Solutions for Tally.ERP 9
                                        </span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/jewellery"
                                            target="_blank"
                                          >
                                            Jewellery Industry
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/manufacturing"
                                            target="_blank"
                                          >
                                            Manufacturing Industry
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/electronic"
                                            target="_blank"
                                          >
                                            Electronic Showroom Management
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/hotelrest"
                                            target="_blank"
                                          >
                                            Hotel &amp; Restaurant
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/schoolcllg"
                                            target="_blank"
                                          >
                                            School &amp; College
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/traininginstitute"
                                            target="_blank"
                                          >
                                            Training Institute
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/chitfund"
                                            target="_blank"
                                          >
                                            Chit Fund Module
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/automobile"
                                            target="_blank"
                                          >
                                            Automobile Module
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/crm"
                                            target="_blank"
                                          >
                                            CRM Module
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/erpmanufacturing"
                                            target="_blank"
                                          >
                                            ERP Manufacturing Module
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/erpbus"
                                            target="_blank"
                                          >
                                            ERP BUS Module for Schools, College
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/buildersprop"
                                            target="_blank"
                                          >
                                            Builders &amp; Property
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="/solutions/verticalsolutions/advertisement"
                                            target="_blank"
                                          >
                                            Tally ERP for Advertisement
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>Customization Solutions</span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="/solutions/customizationsolutions/analytic">
                                            Analytic Designing
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/solutions/customizationsolutions/implementationtraining">
                                            Implementation &amp; Training
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/solutions/customizationsolutions/postsalessupport">
                                            Post Sales Support
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>
                                          Tally Ready Invoice Customization
                                        </span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="\solutions\readyinvoicecust\preprinted">
                                            Preprinted Invoices
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\readyinvoicecust\service">
                                            Service Invoice
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\readyinvoicecust\manufacturing">
                                            Manufacturing Invoice
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\readyinvoicecust\trading">
                                            Trading Invoice
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\readyinvoicecust\clearingforwarding">
                                            Clearing and Forwarding Invoice
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\readyinvoicecust\autoparts">
                                            Auto Parts Invoice
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\readyinvoicecust\garment">
                                            Garment Invoice
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\readyinvoicecust\simple">
                                            Simple Invoice
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\readyinvoicecust\miscellaneous">
                                            Miscellaneous Invoices
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>Tally add-on Modules</span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a
                                            href="\solutions\addonmodule\garment"
                                            target="_blank"
                                          >
                                            Garment Industry Module
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="\solutions\addonmodule\vehicle"
                                            target="_blank"
                                          >
                                            Vehicle Sales Module{' '}
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="\solutions\addonmodule\partywise"
                                            target="_blank"
                                          >
                                            Party Wise Outstanding Module{' '}
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="\solutions\addonmodule\standardtandc"
                                            target="_blank"
                                          >
                                            Standard Terms and Condition Module{' '}
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="\solutions\addonmodule\threediscount"
                                            target="_blank"
                                          >
                                            Three Discount Coloum Module{' '}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\addonmodule\autophysicalstock">
                                            Auto Physical Stock Verification
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="\solutions\addonmodule\godownaddress"
                                            target="_blank"
                                          >
                                            Godown Address in Print Module{' '}
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="\solutions\addonmodule\petrolpump"
                                            target="_blank"
                                          >
                                            Petrol Pump Module{' '}
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="\solutions\addonmodule\stockgroup"
                                            target="_blank"
                                          >
                                            Stock Group Wise Item Filter{' '}
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="\solutions\addonmodule\oneclickdetail"
                                            target="_blank"
                                          >
                                            1 Click Instrument Detail Module
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>Tally Integration</span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a
                                            href="\solutions\tallyintegration\gpsintegration"
                                            target="_blank"
                                          >
                                            GPS Integration
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="\solutions\tallyintegration\hypermarket"
                                            target="_blank"
                                          >
                                            Hyper Market
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="\solutions\tallyintegration\remotelocation"
                                            target="_blank"
                                          >
                                            Remote Location Barcode Scanner
                                            Integration
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="dropdown dropdown-submenu">
                                      {' '}
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <span>Corporate Management</span>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="\solutions\corporatemanagement\managementconsultancy">
                                            Management Consultancy Services
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\corporatemanagement\businessdev">
                                            Business Development
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\corporatemanagement\franchiseservices">
                                            Our Franchise Services
                                          </a>
                                        </li>
                                        <li>
                                          <a href="\solutions\corporatemanagement\erpcorporate">
                                            ERP for Corporate's and Industries{' '}
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="\solutions\custombuiltsolutions">
                                        Custom Built Solution
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="nav-item dropdown">
                                {' '}
                                <a
                                  className="nav-link dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                >
                                  Download
                                </a>
                                <div className="dropdown-menu">
                                  <ul className="list-unstyled">
                                    <li>
                                      <a href="/download/tallydownloads">
                                        Tally Downloads
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/download/instantsupport">
                                        Instant Support
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="nav-item">
                                {' '}
                                <a className="nav-link" href="/contact">
                                  Contact Us
                                </a>
                              </li>
                              <li className="nav-item-button">
                                <div className="d-flex">
                                  <div className="social-icons fixed-header-social">
                                    <ul className="list-inline">
                                      <li>
                                        <a href="http://www.facebook.com/TallySolution">
                                          <i className="fab fa-facebook-f" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="http://www.pinterest.com/tallysoftware">
                                          <i className="fab fa-pinterest" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="http://twitter.com/#!/TALLYSOLUTION">
                                          <i className="fab fa-twitter" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="http://www.linkedin.com/pub/tally-customization-developers-delhi-ncr/38/5b/a7">
                                          <i className="fab fa-linkedin-in" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="tel:+919582927928">
                                          <i className="fas fa-phone-alt" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="mailto:tallyproducts@gmail.com">
                                          <i className="fas fa-envelope" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div>
                                  <a className="btn me-1 me-sm-3">
                                    <span>Rapid Response Center</span>
                                  </a>
                                  <a
                                    className="btn me-1 me-sm-3"
                                    href="buyoffline.php"
                                  >
                                    <i className="flaticon-shopping-cart" />
                                    <span>Buy Tally</span>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item-button tally-international">
                                <a href="TALLYINTERNATIONAL/" target="_blank">
                                  <img
                                    src="assets/images/tallyinternational.png"
                                    className="tally-international-shake"
                                    style={{ filter: 'invert(0)' }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 hover:bg-gray-200 focus:outline-none ring-2 ring-gray-200 duration-100"
              onClick={onClose}
            >
              <GiHamburgerMenu className="w-5 h-5" />
            </button>
          </div>
          <div
            className={classNames(
              "justify-between items-center w-full lg:flex lg:w-auto lg:order-1",
              { hidden: !hash }
            )}
          >
            
          </div> */}
      </div>
      <button
        aria-label="Go Up"
        onClick={onUp}
        className={classNames(
          'bg-white border-2 border-blue-700 text-center fixed bottom-5 h-12 w-12 right-5 duration-500 rounded-full z-50 group',
          'hover:bg-blue-600 hover:border-blue-600',
          {
            block: top,
            hidden: !top,
          }
        )}
      >
        <IoIosArrowUp className="h-full w-full p-2 text-blue-700 group-hover:text-white" />
      </button>
    </header>
  )
}
