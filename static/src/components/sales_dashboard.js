/** @odoo-module */

import { registry } from "@web/core/registry"
import { KpiCard } from "./kpi_card/kpi_card"
//import { KpiCard } from "./kpi_card/KpiCardSingle"
import { ChartRenderer } from "./chart_renderer/chart_renderer"
import { loadJS } from "@web/core/assets"
const { Component, onWillStart, useRef, onMounted } = owl

export class OwlSalesDashboard extends Component {
    setup(){

    }
}

OwlSalesDashboard.template = "owl.OwlSalesDashboard"
OwlSalesDashboard.components = { KpiCard, ChartRenderer }
//OwlSalesDashboard.components = { KpiCardSingle }

registry.category("actions").add("owl.sales_dashboard", OwlSalesDashboard)