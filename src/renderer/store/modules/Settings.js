import settings from "@/utils/settings";

const state = {
  projects: []
};

const mutations = {
  LOAD_INITIAL_PROJECTS(state, projects) {
    state.projects = projects;
  },
  ADD_PROJECT(state, project) {
    state.projects.push(project);
    settings.save({ projects: state.projects });
  },
  REMOVE_PROJECT(state, project) {
    state.projects = state.projects.filter(p => p !== project);
    settings.save({ projects: state.projects });
  }
};

const actions = {};

export default {
  state,
  mutations,
  actions
};