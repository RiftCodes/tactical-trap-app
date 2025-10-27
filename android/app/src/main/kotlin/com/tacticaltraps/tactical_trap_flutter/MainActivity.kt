package com.tacticaltraps.tactical_trap_flutter

import android.os.Bundle
import androidx.core.view.WindowCompat
import io.flutter.embedding.android.FlutterFragmentActivity

class MainActivity : FlutterFragmentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Enable edge-to-edge for Android 15+ compatibility
        WindowCompat.setDecorFitsSystemWindows(window, false)
    }
}
