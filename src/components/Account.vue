<template>
  <div class="account">
        <div class="container">
            <h4 class="font-weight-bold">ACCOUNT SETTINGS</h4>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card pr-3 pl-3">
                        <div class="card-body">
                            <div class="head">
                                <p class="text-uppercase title"><img src="/images/svg ting.svg"> personal information</p>
                                <p class="subtitle">Use this page to update your contact information and change your password.</p>
                            </div>
                               
                            <div class="row mb-5">
                                <div class="col-1"><img src="/images/Avatar.png"></div>
                                <div class="col-4 ml-5 pt-3">
                                    <p><span class="btn-link text-dark font-weight-bold">Upload a new profile image</span><br>
                                    <small>Maximum size allowed is 600kb of PNG, JPEG, JPG.</small></p>
                                </div>

                            </div>

                            <div>
                                <form>
                                    <div class="form-row mb-3">
                                        <div class="col-3">
                                            <label for="email">EMAIL ADDRESS</label>
                                            <input type="email" class="form-control" id="email">
                                        </div>
                                    </div>
                                    <div class="form-row mb-3">
                                        <div class="col-3">
                                            <label for="email">FULL NAME</label>
                                            <input type="email" class="form-control" id="email">
                                        </div>
                                        <div class="col-3">
                                            <label for="email">USER NAME</label>
                                            <input type="email" class="form-control" id="email">
                                        </div>
                                        <div class="col-3">
                                            <label for="email">BIRTH DATE</label>
                                            <input type="email" class="form-control" id="email">
                                        </div>
                                    </div>
                                    <button class="btn btn-submit">Save Changes</button>
                                    <div class="dropdown-divider mb-4 mt-4"></div>
                                    <div class="form-row mb-3">
                                        <div class="col-3">
                                            <label for="email">CURRENT PASSWORD</label>
                                            <input type="password" class="form-control" id="email">
                                        </div>
                                        <div class="col-3">
                                            <label for="email">NEW PASSWORD</label>
                                            <input type="password" class="form-control" id="email">
                                        </div>
                                        <div class="col-3">
                                            <label for="email">CONFIRM PASSWORD</label>
                                            <input type="password" class="form-control" id="email">
                                        </div>
                                    </div>
                                    <button class="btn btn-submit">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card pr-3 pl-3">
                        <div class="card-body">
                            <div class="head">
                                <p class="text-uppercase title"><img src="/images/svg ting.svg"> change state of residence</p>
                                <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                               

                            <div>
                                <form>
                                    <div class="form-row mb-3">
                                        <div class="col-3">
                                            <label for="email">CURRENT STATE</label>
                                            <input type="email" class="form-control" id="email">
                                        </div>
                                    </div>
                                    <div class="form-row mb-3">
                                        <div class="col-3">
                                            <label for="email">NEW STATE OF RESIDENCE</label>
                                            <input type="email" class="form-control" id="email">
                                        </div>
                                        <div class="col-3">
                                            <label for="email">WHAT LGA DO YOU LIVE IN</label>
                                            <input type="email" class="form-control" id="email">
                                        </div>
                                        <div class="col-3">
                                            <label for="email">FEDERAL CONSTITUENCIES</label>
                                            <input type="email" class="form-control" id="email">
                                        </div>
                                    </div>
                                    <div class="form-row mb-3">
                                        <div class="col-3">
                                            <label for="email">SENERATORIAL DISTRICT</label>
                                            <input type="password" class="form-control" id="email">
                                        </div>
                                        <div class="col-3">
                                            <label for="email">STATE CONSTITUENCIES</label>
                                            <input type="password" class="form-control" id="email">
                                        </div>
                                    </div>
                                    <button class="btn btn-submit">Save Changes</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Account'

}
</script>

<style scoped>
.account {background-image: url('/images/shapes-background-2.png')}
.container {margin-bottom: 50px}
.card {background: #FFFFFF; border: 0px; border-radius: 4px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06); }
.head {margin-bottom: 50px !important}
.form-row label {font-size: 12px; color: #4C0032; font-weight: 600}
.btn-submit {background: #F58634; border-radius: 2px; color:#FFFFFF; font-size: 16px; padding: 20px 50px}
.form-row input {background: rgba(235, 218, 206, 0.2);border: 1px solid #EBDACE;box-sizing: border-box;border-radius: 4px;}
.form-row input:focus {background: #E7E7E7;border: 1px solid #D3D3D3;box-sizing: border-box;border-radius: 4px;}
.title, .subtitle {font-size: 13px; font-weight: 500}
</style>