<template>
    <div>
        <div class="container">
            <h4>Welcome, Lois</h4>
            <p>Monday, July 22, 2019</p>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card insurance1">
                        <div class="card-body">
                            <img src="/images/Insurance bought icon.png">
                            <h1 class="card-text">{{ allStatistics.totalInsurancesBought }}</h1>
                            <p>Total Insurance Bought</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="card-body insurance2">
                            <img src="/images/total amount insurance icon.png">
                            <h1 class="card-text">₦{{ allStatistics.totalInsuranceAmount }}</h1>
                            <p>Total Amount of Insurance</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="card-body insurance3">
                            <img src="/images/insurance claim icon.png">
                            <h1 class="card-text">{{ allStatistics.totalInsuranceClaims }}</h1>
                            <p>Total Insurance Claims</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card insurance4">
                        <div class="card-body">
                            <img src="/images/amount of claims icon.svg">
                            <h1 class="card-text">₦{{ allStatistics.totalClaimsAmount }}</h1>
                            <p>Total Amount of Claims</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-text mb-3">Insurance Applications</h5>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="font-weight-light" scope="col">S.N</th>
                                        <th class="font-weight-light" scope="col">Insurance Type</th>
                                        <th class="font-weight-light" scope="col">Amount</th>
                                        <th class="font-weight-light" scope="col">Date</th>
                                        <th class="font-weight-light" scope="col">Status</th>
                                        <th class="font-weight-light" scope="col">Action</th>
                                        <th class="font-weight-light" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr class="font-weight-bold" v-for="(application, index) in allApplications" :key="application.id">
                                        <th scope="row">{{ index }}</th>
                                        <td>{{ application.insuranceType }}</td>
                                        <td>₦{{ application.amount }}</td>
                                        <td>{{application.date}}</td>
                                        <td><span class="btn btn-sm" v-bind:class="{'status-completed': application.complete, 'status-incomplete': !application.complete}"><img src="/images/Ellipse.svg"> {{ application.complete ? "Complete" : "Incomplete"}}</span></td>
                                        <td><button class="btn btn-action">Make a Claim</button></td>
                                        <td><span class="btn btn-link text-dark" id="dropdownAction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actions</span>
                                            <div class="dropdown-menu" aria-labelledby="dropdownAction">
                                                <button class="dropdown-item" type="button">Action</button>
                                                <div class="dropdown-divider"></div>
                                                <button class="dropdown-item" type="button">Another action</button>
                                            </div>
                                        </td>
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Statistics',
    methods: {
        ...mapActions(['fetchApplications']),
        ...mapActions(['fetchStatistics']),
    },
    computed: {
        ...mapGetters(['allApplications']),
        ...mapGetters(['allStatistics'])
    },
    created() {
        this.fetchApplications(),
        this.fetchStatistics()
    }
}
</script> 


<style scoped>
.container {margin-bottom: 50px}
.card {background: #FFFFFF; border: 0px; border-radius: 4px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06); }
.insurance1 {background-image: url('/images/insurance shield.svg'); background-repeat: no-repeat; background-position: bottom right;}
.insurance2 {background-image: url('/images/total amount svg.svg'); background-repeat: no-repeat; background-position: bottom right;}
.insurance3 {background-image: url('/images/insurance claim.svg'); background-repeat: no-repeat; background-position: bottom right;}
.insurance4 {background-image: url('/images/amount of claims.svg'); background-repeat: no-repeat; background-position: bottom right;}
.card-text {font-weight: bold}
.table-striped tbody tr:nth-of-type(odd) {background: #F8F7F6 !important;}
.status-completed{font-size: 12px; font-weight: 500; color: #6add0e; background: rgba(106, 221, 14, 0.2); border-radius: 2px; padding: 5px 15px}
.status-incomplete{font-size: 12px; font-weight: 500; color: #FD5262; background: rgba(253, 82, 98, 0.2); border-radius: 2px; padding: 5px 15px}
.btn-action {background: #F58634; border-radius: 2px; padding: 5px 25px; color: #fff;}
</style>