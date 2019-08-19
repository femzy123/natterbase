import axios from 'axios'

const state = {
    applications: [],
    statistics: {}
}

const getters = {
    allApplications: state => state.applications, 
    allStatistics: state => state.statistics
}

const actions = {
    async fetchApplications({ commit }) {
        const response = await axios.get(
          "http://test.natterbase.com:5050/api/interview/get-applications",
          {
            headers: {
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg"
            }
          }
        );

        var months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

        
        for(var i = 0; i < response.data.applications.length; i++) {
          var date = new Date(response.data.applications[i].createdDate)
          response.data.applications[i].date = date.getDate() + " " + months[date.getMonth()+1] + " " + date.getFullYear()
        }

        // console.log(response.data.applications)

        commit("setApplications", response.data.applications);
        
    },

    async fetchStatistics({ commit }) {
        const response = await axios.get(
          "http://test.natterbase.com:5050/api/interview/get-statistics",
          {
            headers: {
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg"
            }
          }
        );

        commit('setStatistics', response.data.statistics)
        
    }
}
 
const mutations = {
  setApplications: (state, applications) => (state.applications = applications),
  setStatistics: (state, statistics) => (state.statistics = statistics)
};

export default {
    state,
    getters,
    actions,
    mutations
}