import PersonalInfoForm from './PersonalInfoForm'
import ChangePasswordForm from './ChangePasswordForm'

export default function Profile() {
  return (
    <div className='md:px-8 px-4 py-8 flex flex-col gap-6 max-w-4xl mx-auto'>
      <PersonalInfoForm />
      <ChangePasswordForm />
    </div>
  )
}
