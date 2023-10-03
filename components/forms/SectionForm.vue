<template>
    <form @submit.prevent="onSubmit" class="bg-primary-200 p-5 rounded-lg border-l border-b border-success-300">
        <h1 class="text-primary-500" v-if="section == undefined">Nouvelle section</h1>
        <h1 class="text-primary-500" v-else>Modification</h1>
        <forms-custom-input name="titre" placeholder="Titre"></forms-custom-input>
        <forms-custom-input name="id" type="hidden"></forms-custom-input>
        <forms-custom-text-area name="description" cols="30" rows="8" placeholder="Description"></forms-custom-text-area>
        <ui-success-btn :loading="isSubmitting" :disabled="isSubmitting" type="submit" class="mt-3">Enregistrer</ui-success-btn>
        {{ errors.value }}
    </form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

const props = defineProps({
    section: Object
})

const emit = defineEmits(['section-submited'])

const { isSubmitting, handleSubmit, errors} = useForm({
    initialValues: {
        id: props.section != undefined ? props.section.id : null,
        titre: props.section != undefined ? props.section.titre : '',
        description: props.section != undefined ? props.section.description : ''
    },
    validationSchema: object({
        titre: string().min(4).required()
    }),
})

const onSubmit = handleSubmit((values, { resetForm }) => {
    return new Promise(resolve => {
        console.log('onSubmit with', values)
        const store = useQuestionnaireStore()
        if (props.section == undefined) {
            store.insertSection(values).then((vel) => {
                resetForm()
                emit('section-submited')
                resolve()
            })            
        } else {
            store.updateSection(values).then((vel) => {
                resetForm()
                emit('section-submited')
                resolve()
            })
        }
    })
});

</script>

<style lang="scss" scoped></style>