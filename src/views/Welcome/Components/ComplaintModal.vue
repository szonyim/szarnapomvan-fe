<script setup>
import {ref} from "vue";
import { useAppStore } from "@/stores";

import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import Api from "../../../configs/Api";
import ReCaptcha from "../../../components/ReCaptcha.vue";

const props = defineProps(['locations'])
const store = useAppStore();

const createdBy = ref('')
const content = ref('');
const levels = ref([
  {value: 0, text: 'Annyira nem vészes'},
  {value: 1, text: 'Szar'},
  {value: 2, text: 'Nagyon szar'},
  {value: 3, text: 'Kegyetlen'},
])

const selectedLocationId = ref(null)
const selectedLevel = ref(null)

function changeLocation(locationId) {
  selectedLocationId.value = locationId
}

function changeLevel(level) {
  selectedLevel.value = level
}

function onCreatedByChange(e) {
  createdBy.value = e.target.value
}

function onContentChange(e) {
  content.value = e.target.value
}

function createPost() {
  fetch(`${Api.get('/api/Post/add')}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      createdBy: createdBy.value,
      badLevel: selectedLevel.value,
      content: content.value,
      locationId: selectedLocationId.value
    })
  })
  .then(response => response.json())
  .then((response) => {
    store.$patch((state) => {
      state.posts.unshift(response)
      state.hasChanged = true
    })

    const complaintModal = document.getElementById('complaintModal')
    const complaintModalInstance = store.bootstrap.Modal.getInstance(complaintModal) 
    complaintModalInstance.hide()
  })
}
</script>

<template>
  <div
      class="modal fade"
      id="complaintModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Az én panaszom
          </h5>
          <MaterialButton
              color="none"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close">
          </MaterialButton>
        </div>
        <div class="modal-body">

          <div class="row">
            <div class="col-lg-4 mx-auto">
              <MaterialInput
                  class="input-group-dynamic"
                  type="text"
                  :value="createdBy" 
                  @input="onCreatedByChange"
                  placeholder="Ki vagy Te?"
              />
            </div>

            <div class="col-lg-4 mx-auto">
              <div class="dropdown">
                <MaterialButton
                    variant="gradient"
                    color="success"
                    class="dropdown-toggle"
                    id="dropdownLocationsButton"
                    data-bs-toggle="dropdown"
                >
                  <!-- <span v-text="selectedLocation === null? 'Honnan?' : locations[selectedLocation].name"></span> -->
                  {{ selectedLocationId === null ? 'Honnan?' : locations[selectedLocationId].name }}
                </MaterialButton>

                <ul class="dropdown-menu px-2 py-3"
                    aria-labelledby="dropdownLocationsButton">
                  <li v-for="location in props.locations">
                    <button class="dropdown-item border-radius-md" @click="changeLocation(location.id)">
                      {{ location.name }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4 mx-auto">
              <div class="dropdown">
                <MaterialButton
                    variant="gradient"
                    color="success"
                    class="dropdown-toggle"
                    id="dropdownLevelsButton"
                    data-bs-toggle="dropdown">
                  {{ selectedLevel === null ? 'Mennyire' : levels[selectedLevel].text }}
                </MaterialButton>

                <ul
                    class="dropdown-menu px-2 py-3"
                    aria-labelledby="dropdownLevelsButton">
                  <li v-for="level in levels">
                    <a class="dropdown-item border-radius-md" @click="changeLevel(level.value)">{{ level.text }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row"></div>
          <div class="row">
            <div class="col-lg-12">
              <MaterialTextArea
                  class="input-group-static mb-4"
                  id="message"
                  :rows="4"
                  :model="content"
                  :value="content"
                  @input="onContentChange"
                  placeholder="Kivele...">

              </MaterialTextArea>
            </div>
          </div>

        </div>
        <div class="modal-footer justify-content-between">
          <MaterialButton
              variant="gradient"
              color="dark"
              data-bs-dismiss="modal">
            Mégse
          </MaterialButton>

          <ReCaptcha />
          <MaterialButton variant="gradient" color="success" class="mb-0" @click="createPost">
            Mehet
          </MaterialButton>
        </div>
      </div>
    </div>
  </div>
</template>
