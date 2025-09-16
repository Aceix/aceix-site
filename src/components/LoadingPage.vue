<template>
  <div class="loading-container">
    <div class="terminal">
      <div
        v-for="(log, index) in visibleLogs"
        :key="index"
        class="log-line"
        :class="{ 'ready-line': log.includes('system is ready') }"
      >
        {{ log }}
      </div>
      <div v-if="showCursor" class="cursor">_</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject, computed, type Ref } from 'vue'

const emit = defineEmits<{
  loadingComplete: []
}>()

const textColor = inject<Ref<string>>('textColor', ref('white'))
const computedTextColor = computed(() => textColor.value)

const bootLogs = [
  '[    0.000000] Linux version 6.8.0-aceix (aceix@localhost) (gcc version 12.3.0)',
  '[    0.000124] Command line: BOOT_IMAGE=/vmlinuz root=/dev/sda1 ro quiet splash',
  '[    0.000890] KERNEL supported cpus:',
  "[    0.001234] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'",
  "[    0.002456] x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'",
  '[    0.003789] BIOS-provided physical RAM map:',
  '[    0.004123] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable',
  '[    0.005678] BIOS-e820: [mem 0x00000000000f0000-0x00000000000fffff] reserved',
  '[    0.006890] Setup APIC routing.',
  '[    0.007234] IOAPIC[0]: apic_id 2, version 32, address 0xfec00000, GSI 0-23',
  '[    0.008567] Using ACPI (MADT) for SMP configuration information',
  '[    0.009123] e820: remove [mem 0x000a0000-0x000fffff] usable',
  '[    0.010456] ACPI: Early table checksum verification disabled',
  '[    0.011789] ACPI: RSDP 0x00000000000F16B0 000024 (v02 ACEIX )',
  '[    0.012345] ACPI: XSDT 0x00000000BFEE1230 00005C (v01 ACEIX  ACEAIXPC 00000001)',
  '[    0.013678] Console: colour VGA+ 80x25',
  '[    0.014234] printk: console [tty0] enabled',
  '[    0.015567] ACPI: Core revision 20231127',
  '[    0.016123] clocksource: hpet: mask: 0xffffffff max_cycles: 0xffffffff',
  '[    0.017456] APIC: Switch to symmetric I/O mode setup',
  "[    0.018789] x2apic: IRQ remapping doesn't support X2APIC mode",
  '[    0.019345] Enabling APIC mode:  Flat.  Using 1 I/O APICs',
  '[    0.020678] ..TIMER: vector=0x30 apic1=0 pin1=2 apic2=-1 pin2=-1',
  '[    0.021234] TSC deadline timer available',
  '[    0.022567] smpboot: Allowing 4 CPUs, 0 hotplug CPUs',
  '[    0.023123] PM: hibernation: Registered nosave memory: [mem 0x00000000-0x00000fff]',
  '[    0.024456] [mem 0x000a0000-0x000fffff] page 4k',
  '[    0.025789] pcpu-alloc: s0 r0 d32768 u32768 alloc=1*32768',
  '[    0.026345] Built 1 zonelists, mobility grouping on.',
  '[    0.027678] Policy zone: DMA32',
  '[    0.028234] Kernel command line: BOOT_IMAGE=/vmlinuz root=/dev/sda1 ro quiet splash',
  '[    0.029567] Unknown kernel command line parameters "splash", will be passed to user space.',
  '[    0.073456] Freeing SMP alternatives memory: 40K',
  '[    0.074789] pid_max: default: 32768 minimum: 301',
  '[    0.075345] LSM: initializing lsm=lockdown,capability,landlock,yama,apparmor',
  '[    0.076678] Mount-cache hash table entries: 8192 (order: 4, 65536 bytes)',
  '[    0.077234] smpboot: CPU0: Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz (family: 0x6, model: 0x9e, stepping: 0xa)',
  '[    0.078567] Performance Events: PEBS fmt3+, Skylake events, 32-deep LBR, full-width counters, Intel PMU driver.',
  '[    0.079890] ... version:                4',
  '[    0.080456] ... bit width:              48',
  '[    0.081789] ... generic registers:      4',
  '[    0.082345] ... value mask:             0000ffffffffffff',
  '[    0.083678] ... max period:             00007fffffffffff',
  '[    0.084234] ... fixed-purpose events:   3',
  '[    0.085567] ... event mask:             000000070000000f',
  '[    0.086890] rcu: Hierarchical SRCU implementation.',
  '[    0.087456] rcu: 	Max phase no-delay instances is 1000.',
  '[    0.396789] systemd[1]: Reached target Swap.',
  '[    0.397345] systemd[1]: Reached target System Time Set.',
  '[    0.398678] systemd[1]: Listening on Device-mapper event daemon FIFOs.',
  '[    0.399234] systemd[1]: Listening on LVM2 poll daemon socket.',
  '[    0.400567] systemd[1]: Listening on Syslog Socket.',
  '[    0.401890] systemd[1]: Listening on fsck to fsckd communication Socket.',
  '[    0.402456] systemd[1]: Listening on initctl Compatibility Named Pipe.',
  '[    0.403789] systemd[1]: Listening on Journal Audit Socket.',
  '[    0.404345] systemd[1]: Listening on Journal Socket (/dev/log).',
  '[    0.405678] systemd[1]: Listening on Journal Socket.',
  '[    0.406234] systemd[1]: Listening on udev Control Socket.',
  '[    0.492890] systemd[1]: Starting Update UTMP about System Boot/Shutdown...',
  '[    0.493456] systemd[1]: Finished Update UTMP about System Boot/Shutdown.',
  '[    0.494789] systemd[1]: Reached target System Initialization.',
  '[    0.495345] systemd[1]: Started Daily apt download activities.',
  '[    0.496678] systemd[1]: Started Daily apt upgrade and clean activities.',
  '[    0.497234] systemd[1]: Started Periodic ext4 Online Metadata Check for All Filesystems.',
  '[    0.498567] systemd[1]: Started Discard unused blocks once a week.',
  '[    0.499890] systemd[1]: Started Daily rotation of log files.',
  '[    0.500456] systemd[1]: Started Daily man-db regeneration.',
  '[    0.501789] systemd[1]: Started Message of the Day.',
  '[    0.502345] systemd[1]: Started Daily Cleanup of Temporary Directories.',
  '[    0.503678] systemd[1]: Reached target Basic System.',
  '[    0.504234] systemd[1]: Started Regular background program processing daemon.',
  '[    0.505567] systemd[1]: Started D-Bus System Message Bus.',
  '[    0.506890] systemd[1]: Starting Remove Stale Online ext4 Metadata Check Snapshots...',
  '[    0.507456] systemd[1]: Starting System Logging Service...',
  '[    0.508789] systemd[1]: Starting User Login Management...',
  '[    0.509345] systemd[1]: Starting Network Manager...',
  '[    0.510678] systemd[1]: Started IRQ balancing daemon.',
  '[    0.511234] systemd[1]: Starting Automatic power management...',
  '[    0.512567] systemd[1]: Starting WPA supplicant...',
  '[    0.513890] systemd[1]: Started System Logging Service.',
  '[    0.514456] systemd[1]: Finished Remove Stale Online ext4 Metadata Check Snapshots.',
  '[    0.515789] systemd[1]: Started WPA supplicant.',
  '[    0.516345] systemd[1]: Started Network Manager.',
  '[    0.517678] systemd[1]: Reached target Network.',
  '[    0.518234] systemd[1]: Starting /etc/rc.local Compatibility...',
  '[    0.519567] systemd[1]: Starting OpenBSD Secure Shell server...',
  '[    0.520890] systemd[1]: Started Automatic power management.',
  '[    0.521456] systemd[1]: Starting Load/Save RF Kill Switch Status...',
  '[    0.522789] systemd[1]: Started User Login Management.',
  '[    0.523345] systemd[1]: Started /etc/rc.local Compatibility.',
  '[    0.524678] systemd[1]: Started Load/Save RF Kill Switch Status.',
  '[    0.525234] systemd[1]: Started OpenBSD Secure Shell server.',
  '[    0.526567] systemd[1]: Reached target Multi-User System.',
  '[    0.527890] systemd[1]: Starting GNOME Display Manager...',
  '[    0.528456] systemd[1]: Started GNOME Display Manager.',
  '[    0.529789] systemd[1]: Reached target Graphical Interface.',
  '[    0.530345] systemd[1]: Starting Update UTMP about System Runlevel Changes...',
  '[    0.531678] systemd[1]: Finished Update UTMP about System Runlevel Changes.',
  '[    0.532234] systemd[1]: Startup finished in 5.234s (kernel) + 0.000s (userspace) = 5.234s.',
  '[    0.533567] visitor@theaceix.site:~$ system is ready',
]

const visibleLogs = ref<string[]>([])
const showCursor = ref(true)
const currentIndex = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    if (currentIndex.value < bootLogs.length) {
      visibleLogs.value.push(bootLogs[currentIndex.value])
      currentIndex.value++

      // Auto-scroll to bottom
      const container = document.querySelector('.terminal')
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    } else {
      showCursor.value = false
      clearInterval(interval)

      // Wait a bit before transitioning to main page
      setTimeout(() => {
        emit('loadingComplete')
      }, 2000)
    }
  }, 50) // Adjust speed of log display
})
</script>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.terminal {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.2;
  color: v-bind(computedTextColor);
  background: transparent;
}

.log-line {
  margin-bottom: 2px;
  white-space: nowrap;
}

.ready-line {
  color: #00ff00;
  font-weight: bold;
  margin-top: 10px;
}

.cursor {
  color: v-bind(computedTextColor);
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

/* Custom scrollbar */
.terminal::-webkit-scrollbar {
  width: 8px;
}

.terminal::-webkit-scrollbar-track {
  background: #111;
}

.terminal::-webkit-scrollbar-thumb {
  background: v-bind(computedTextColor);
  border-radius: 4px;
}

.terminal::-webkit-scrollbar-thumb:hover {
  background: #666;
}
</style>
